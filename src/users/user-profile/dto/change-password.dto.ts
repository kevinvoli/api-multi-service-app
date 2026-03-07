export class ChangePasswordDto {
  iUserId: number;
  userType: 'rider' | 'driver' | 'company';
  currentPassword: string;
  newPassword: string;
}
