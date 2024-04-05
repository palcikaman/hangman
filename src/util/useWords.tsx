import { useMemo } from "react";
import { WORDS } from "../config/hangman_words";

export const useWords = () => {
  const wordLimit = useMemo(
    () =>
      WORDS.reduce(
        (res, word) => ({
          min: res.min < word.length ? res.min : word.length,
          max: res.max > word.length ? res.max : word.length,
        }),
        { min: Infinity, max: 0 }
      ),
    [WORDS]
  );

  return {
    WORDS,
    wordLimit,
  };
};
