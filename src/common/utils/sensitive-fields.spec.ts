import {
  SENSITIVE_ACCOUNT_FIELDS,
  stripSensitiveFields,
} from './sensitive-fields';

describe('stripSensitiveFields', () => {
  it('retire tous les champs sensibles et conserve les autres', () => {
    const account: Record<string, unknown> = { iUserId: 1, vName: 'Awa' };
    for (const field of SENSITIVE_ACCOUNT_FIELDS) account[field] = 'secret';

    expect(stripSensitiveFields(account)).toEqual({ iUserId: 1, vName: 'Awa' });
  });

  it('ne modifie pas l objet d origine', () => {
    const account = { vName: 'Awa', vPassword: 'hash' };
    stripSensitiveFields(account);
    expect(account.vPassword).toBe('hash');
  });
});
