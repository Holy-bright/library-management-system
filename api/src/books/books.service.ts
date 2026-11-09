import {
  BadRequestException, ConflictException, Injectable, NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateBookDto } from "./dto/create-book.dto.js";
import { UpdateBookDto } from "./dto/update-book.dto.js";

export interface BookQuery {
  genreId?: string;
  search?: string;
  page?: string;
  limit?: string;
}

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: BookQuery) {
    const page = Math.max(Number(query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(query.limit) || 10, 1), 50);

    if (query.genreId && Number.isNaN(Number(query.genreId))) {
      throw new BadRequestException("genreId must be a number");
    }

    const where = {
      ...(query.genreId ? { genreId: Number(query.genreId) } : {}),
      ...(query.search
        ? {
            OR: [
              { title: { contains: query.search, mode: "insensitive" as const } },
              { author: { contains: query.search, mode: "insensitive" as const } },
            ],
          }
        : {}),
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.book.findMany({
        where,
        include: { genre: true },
        orderBy: { title: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.book.count({ where }),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: { genre: true },
    });
    if (!book) throw new NotFoundException(`Book ${id} not found`);
    return book;
  }

  async create(dto: CreateBookDto) {
    await this.ensureGenreExists(dto.genreId);
    await this.ensureIsbnFree(dto.isbn);
    return this.prisma.book.create({
      data: { ...dto, availableCopies: dto.totalCopies },
    });
  }

  async update(id: number, dto: UpdateBookDto) {
    const book = await this.findOne(id);
    if (dto.genreId) await this.ensureGenreExists(dto.genreId);
    if (dto.isbn && dto.isbn !== book.isbn) await this.ensureIsbnFree(dto.isbn);

    let availableCopies = book.availableCopies;
    if (dto.totalCopies !== undefined) {
      const onLoan = book.totalCopies - book.availableCopies;
      if (dto.totalCopies < onLoan) {
        throw new BadRequestException(
          `${onLoan} copies are on loan. totalCopies cannot go below that.`,
        );
      }
      availableCopies = dto.totalCopies - onLoan;
    }

    return this.prisma.book.update({
      where: { id },
      data: { ...dto, availableCopies },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.book.delete({ where: { id } });
  }

  private async ensureGenreExists(genreId: number) {
    const genre = await this.prisma.genre.findUnique({ where: { id: genreId } });
    if (!genre) throw new BadRequestException(`Genre ${genreId} does not exist`);
  }

  private async ensureIsbnFree(isbn: string) {
    const existing = await this.prisma.book.findUnique({ where: { isbn } });
    if (existing) throw new ConflictException(`A book with ISBN ${isbn} already exists`);
  }
}
