import { ForbiddenException } from '@nestjs/common';
import { ADMIN_TYPE, AuthUser, Role, UserType } from './auth.types';

export function isAdmin(user: AuthUser): boolean {
  return user.userType === ADMIN_TYPE;
}

/**
 * L'identifiant visé doit être celui du jeton, sauf pour l'admin.
 * `targetType` évite de confondre deux personnes de même numéro dans des tables distinctes (rider 5 / driver 5).
 */
export function assertSelf(
  user: AuthUser,
  targetId: number | string,
  targetType?: UserType,
): void {
  if (isAdmin(user)) return;
  if (
    Number(targetId) !== user.id ||
    (targetType !== undefined && targetType !== user.userType)
  ) {
    throw new ForbiddenException('Accès refusé à cette ressource');
  }
}

/** Le rôle du jeton doit correspondre à un propriétaire déclaré de l'enregistrement, sauf pour l'admin. */
export function assertOwner(
  user: AuthUser,
  owners: Partial<Record<Role, number>>,
): void {
  if (isAdmin(user)) return;
  const ownerId = owners[user.userType as Role];
  if (ownerId === undefined || ownerId !== user.id) {
    throw new ForbiddenException('Accès refusé à cette ressource');
  }
}
