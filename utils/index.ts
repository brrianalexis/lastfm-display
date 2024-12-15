import {
  FORBIDDEN_CHARACTERS_REGEXP,
  FORBIDDEN_CHARACTERS_REPLACEMENT_MAP,
} from "@/constants";

export const escapeForbiddenCharacters = (str: string) => {
  return str.replace(
    FORBIDDEN_CHARACTERS_REGEXP,
    (match) =>
      FORBIDDEN_CHARACTERS_REPLACEMENT_MAP[
        match as keyof typeof FORBIDDEN_CHARACTERS_REPLACEMENT_MAP
      ]
  );
};
