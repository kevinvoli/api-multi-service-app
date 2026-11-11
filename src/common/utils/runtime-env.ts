export function isDevOrTestEnv(nodeEnv?: string): boolean {
  return nodeEnv === 'development' || nodeEnv === 'test';
}
