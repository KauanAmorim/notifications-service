import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsString()
  @Length(5, 240)
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
