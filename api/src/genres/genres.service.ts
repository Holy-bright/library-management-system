import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateGenreDto } from "./dto/create-genre.dto.js";
import { UpdateGenreDto } from "./dto/update-genre.dto.js";

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.genre.findMany({ orderBy: { name: "asc" } });
  }

  async findOne(id: number) {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    if (!genre) throw new NotFoundException(`Genre ${id} not found`);
    return genre;
  }

  async create(dto: CreateGenreDto) {
    await this.ensureUnique(dto.name, dto.slug);
    return this.prisma.genre.create({ data: dto });
  }

  async update(id: number, dto: UpdateGenreDto) {
    await this.findOne(id);
    await this.ensureUnique(dto.name, dto.slug, id);
    return this.prisma.genre.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    const bookCount = await this.prisma.book.count({ where: { genreId: id } });
    if (bookCount > 0) {
      throw new ConflictException(`Genre ${id} still has ${bookCount} books. Move or delete them first.`);
    }
    await this.prisma.genre.delete({ where: { id } });
  }

  private async ensureUnique(name?: string, slug?: string, ignoreId?: number) {
    const conditions = [
      ...(name ? [{ name }] : []),
      ...(slug ? [{ slug }] : []),
    ];
    if (conditions.length === 0) return;

    const existing = await this.prisma.genre.findFirst({
      where: {
        OR: conditions,
        ...(ignoreId ? { NOT: { id: ignoreId } } : {}),
      },
    });
    if (existing) {
      throw new ConflictException("A genre with that name or slug already exists");
    }
  }
}
