import { escapeForbiddenCharacters } from ".";
import { FORBIDDEN_CHARACTERS_REPLACEMENT_MAP } from "@/constants";

test("should escape all XML forbidden characters", () => {
  Object.entries(FORBIDDEN_CHARACTERS_REPLACEMENT_MAP).forEach(
    ([character, replacement]) => {
      expect(escapeForbiddenCharacters(`Hello ${character} World`)).toBe(
        `Hello ${replacement} World`
      );
    }
  );
});
