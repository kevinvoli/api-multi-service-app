import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateDriverBiddingRequestDto {
  @IsInt()
  @IsNotEmpty()
  iDriverId: number;

  @IsInt()
  @IsNotEmpty()
  iBiddingPostId: number;
}