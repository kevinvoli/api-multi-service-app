import { AuthUser, UserType } from '../../src/auth/auth.types';

export const authUser = (userType: UserType, id = 7): AuthUser => ({
  id,
  email: 'u@amygo.test',
  userType,
});
