export type UserType = 'rider' | 'driver' | 'company' | 'hotel';
export type Role = Exclude<UserType, 'hotel'>;

export const ADMIN_TYPE: UserType = 'hotel';
export const ALL_ROLES: Role[] = ['rider', 'driver', 'company'];

export interface JwtPayload {
  sub: number;
  email: string;
  userType: UserType;
  groupId?: number;
}

export interface AuthUser {
  id: number;
  email: string;
  userType: UserType;
  groupId?: number;
}
