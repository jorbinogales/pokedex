import { IsInt } from 'class-validator';
import { IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @MinLength(1)
  @IsPositive()
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
