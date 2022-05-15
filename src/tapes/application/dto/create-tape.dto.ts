import { IsInt, IsString } from 'class-validator';

export class CreateTapeDto {
  @IsString()
  id: string;

  @IsInt()
  duration: number;

  @IsString()
  description: string;
}
