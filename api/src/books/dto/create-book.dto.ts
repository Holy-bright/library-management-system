import { IsInt, IsNotEmpty, IsString, Matches, Min } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;

  @IsString()
  @Matches(/^\d{10}(\d{3})?$/, { message: "isbn must be 10 or 13 digits" })
  isbn!: string;

  @IsInt()
  @Min(1)
  totalCopies!: number;

  @IsInt()
  @Min(1)
  genreId!: number;
}
