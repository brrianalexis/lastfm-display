const FORBIDDEN_CHARACTERS = [
  { character: '&', replacement: '&amp;' },
  { character: '<', replacement: '&lt;' },
  { character: '>', replacement: '&gt;' },
  { character: '"', replacement: '&quot;' },
  { character: "'", replacement: '&apos;' },
];

export const escapeForbiddenCharacters = (str: string) => {
  let sanitized = str;

  FORBIDDEN_CHARACTERS.forEach(({ character, replacement }) => {
    sanitized = sanitized.replace(new RegExp(character, 'g'), replacement);
  });

  return sanitized;
};
