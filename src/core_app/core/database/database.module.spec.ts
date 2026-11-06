import { parseDatabaseUrl } from './database.module';

describe('parseDatabaseUrl', () => {
  it('décode une URL complète', () => {
    expect(
      parseDatabaseUrl('mysql://kevin:p%40ss@db.local:3307/amygo1'),
    ).toEqual({
      username: 'kevin',
      password: 'p@ss',
      host: 'db.local',
      port: 3307,
      database: 'amygo1',
    });
  });

  it('utilise le port 3306 par défaut', () => {
    expect(parseDatabaseUrl('mysql://u:p@h/db').port).toBe(3306);
  });

  it("n'expose pas l'URL dans l'erreur", () => {
    expect(() => parseDatabaseUrl('postgres://u:secret@h/db')).toThrow(
      /^Invalid DB_URL format/,
    );
    expect(() => parseDatabaseUrl('pas une url')).toThrow(/^Invalid DB_URL/);
    expect(() => parseDatabaseUrl('mysql://u:p@h')).toThrow(/^Invalid DB_URL/);
  });
});
