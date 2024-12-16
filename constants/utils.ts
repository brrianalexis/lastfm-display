export const FORBIDDEN_CHARACTERS_REGEXP = /[&<>"']/g;

export const FORBIDDEN_CHARACTERS_REPLACEMENT_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
