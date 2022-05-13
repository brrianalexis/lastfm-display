export const escapeAmpersands = (str: string) =>
  str.includes('&') ? str.replace(/&/g, '&amp;') : str;
