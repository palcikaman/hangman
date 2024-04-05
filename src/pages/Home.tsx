import { useState } from "react";
import { useWords } from "../util/useWords";
import { Button, Text } from "@chakra-ui/react";
import { getRandomArrayElement, randomNumber, range } from "../util/functions";

type HomeProps = {
  onStart: (answer: string) => void;
};

export const Home = ({ onStart }: HomeProps) => {
  const { WORDS, wordLimit } = useWords();

  const [length, setLength] = useState<number | "random">(wordLimit.min);

  return (
    <>
      <Text>The hangman</Text>
      {/* TODO handle missing word lengths */}
      {range(wordLimit.min, wordLimit.max).map((number) => (
        <Button
          isActive={length === number}
          onClick={() => setLength(number)}
          key={number}
        >
          {number}
        </Button>
      ))}
      <Button
        isActive={length === "random"}
        onClick={() => setLength("random")}
      >
        Random
      </Button>
      <Button
        onClick={() => {
          const wordLength =
            length === "random"
              ? randomNumber(wordLimit.min, wordLimit.max)
              : length;

          onStart(
            getRandomArrayElement(
              WORDS.filter((word) => word.length === wordLength)
            )
          );
        }}
      >
        Start
      </Button>
    </>
  );
};
