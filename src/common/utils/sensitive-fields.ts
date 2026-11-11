export const SENSITIVE_ACCOUNT_FIELDS = [
  'vPassword',
  'vPassToken',
  'vPasswordToken',
  'iOtp',
  'tSessionId',
  'tDeviceSessionId',
  'tSessionIdKiosk',
  'vFirebaseDeviceToken',
  'iGcmRegId',
  'iGcmRegIdKiosk',
  'vEmailVarificationCode',
  'vFbId',
  'vAppleId',
] as const;

export type SensitiveAccountField = (typeof SENSITIVE_ACCOUNT_FIELDS)[number];

export type SafeAccount<T> = T extends unknown
  ? Omit<T, SensitiveAccountField>
  : never;

export function stripSensitiveFields<T extends object>(
  account: T,
): SafeAccount<T> {
  const safe: Record<string, unknown> = { ...(account as object) };
  for (const field of SENSITIVE_ACCOUNT_FIELDS) delete safe[field];
  return safe as SafeAccount<T>;
}
