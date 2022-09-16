export function generateRandomString(length: number) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let value = '';

  for (let i = 0; i < length; i++) {
    value += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return value;
}
