import { IsInt, IsString, Min, Max, Length } from 'class-validator';

export class CreatePollDto {
  @IsString()
  @Length(1, 100)
  topic: string;

  @IsInt()
  @Min(1)
  @Max(1)
  votesPerVoter: number;

  @IsString()
  @Length(1, 25)
  name: string;
}
