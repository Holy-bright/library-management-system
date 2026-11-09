import {
  Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post,
} from "@nestjs/common";
import { GenresService } from "./genres.service.js";
import { CreateGenreDto } from "./dto/create-genre.dto.js";
import { UpdateGenreDto } from "./dto/update-genre.dto.js";

@Controller("genres")
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  findAll() {
    return this.genresService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.genresService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateGenreDto) {
    return this.genresService.create(dto);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateGenreDto) {
    return this.genresService.update(id, dto);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.genresService.remove(id);
  }
}
