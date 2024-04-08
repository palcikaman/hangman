import { useMemo } from "react";
import { WORDS } from "../config/hangman_words";
import { getRandomArrayElement } from "./functions";

export const useWords = () => {
  const wordOptions = useMemo(
    () =>
      WORDS.reduce(
        (res: number[], word) =>
          res.includes(word.length) ? res : [...res, word.length],
        []
      ),
    [WORDS]
  );

  const getRandomWord = (length: number | "random") => {
    const wordLength =
      length === "random" ? getRandomArrayElement(wordOptions) : length;
    return getRandomArrayElement(
      WORDS.filter((word) => word.length === wordLength)
    );
  };

  return {
    WORDS,
    wordOptions,
    getRandomWord,
  };
};
