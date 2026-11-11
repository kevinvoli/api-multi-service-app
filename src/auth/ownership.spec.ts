import { ForbiddenException } from '@nestjs/common';
import { authUser } from '../../test/factories/auth-user.factory';
import { assertOwner, assertSelf, isAdmin } from './ownership';

describe('ownership', () => {
  describe('isAdmin', () => {
    it('vrai uniquement pour hotel', () => {
      expect(isAdmin(authUser('hotel'))).toBe(true);
      expect(isAdmin(authUser('rider'))).toBe(false);
      expect(isAdmin(authUser('driver'))).toBe(false);
      expect(isAdmin(authUser('company'))).toBe(false);
    });
  });

  describe('assertSelf', () => {
    it('accepte son propre identifiant', () => {
      expect(() => assertSelf(authUser('rider'), 7)).not.toThrow();
    });

    it('accepte un identifiant numérique passé en chaîne', () => {
      expect(() => assertSelf(authUser('rider'), '7')).not.toThrow();
    });

    it('refuse l identifiant d un autre', () => {
      expect(() => assertSelf(authUser('rider'), 8)).toThrow(
        ForbiddenException,
      );
    });

    it('refuse un identifiant non numérique', () => {
      expect(() => assertSelf(authUser('rider'), 'abc')).toThrow(
        ForbiddenException,
      );
    });

    it('l admin passe pour n importe quelle cible', () => {
      expect(() =>
        assertSelf(authUser('hotel', 1), 999, 'rider'),
      ).not.toThrow();
    });

    it('accepte quand le type visé est celui du jeton', () => {
      expect(() => assertSelf(authUser('driver'), 7, 'driver')).not.toThrow();
    });

    it('refuse le même numéro dans une autre table (rider 7 vs driver 7)', () => {
      expect(() => assertSelf(authUser('rider'), 7, 'driver')).toThrow(
        ForbiddenException,
      );
    });
  });

  describe('assertOwner', () => {
    it('accepte le rider propriétaire', () => {
      expect(() =>
        assertOwner(authUser('rider'), { rider: 7, company: 3 }),
      ).not.toThrow();
    });

    it('accepte la company propriétaire', () => {
      expect(() =>
        assertOwner(authUser('company', 3), { rider: 7, company: 3 }),
      ).not.toThrow();
    });

    it('refuse un rider qui n est pas le propriétaire', () => {
      expect(() =>
        assertOwner(authUser('rider', 8), { rider: 7, company: 3 }),
      ).toThrow(ForbiddenException);
    });

    it('refuse un rôle absent des propriétaires déclarés', () => {
      expect(() => assertOwner(authUser('driver'), { rider: 7 })).toThrow(
        ForbiddenException,
      );
    });

    it('ne confond pas l id de la company avec celui du rider', () => {
      expect(() =>
        assertOwner(authUser('company', 7), { rider: 7, company: 3 }),
      ).toThrow(ForbiddenException);
    });

    it('l admin passe sans propriétaire déclaré', () => {
      expect(() => assertOwner(authUser('hotel'), {})).not.toThrow();
    });
  });
});
