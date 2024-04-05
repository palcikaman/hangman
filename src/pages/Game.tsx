import { Flex } from "@chakra-ui/react";
import { Lives } from "../components/Lives";
import { LetterInput } from "../components/LetterInput/LetterInput";
import { useState } from "react";
import { Guesses } from "../components/Guesses";

type GameProps = {
  answer: string;
};

export const Game = ({ answer }: GameProps) => {
  const [guesses, setGuesses] = useState<string[]>([]);

  return (
    <Flex direction="column" gap={4} alignItems="center">
      <Lives
        lostLives={
          guesses.filter((guess) => !answer?.toUpperCase().includes(guess))
            .length
        }
      />
      <Guesses answer={answer} guesses={guesses} />
      <LetterInput
        onLetterSelect={(letter) => {
          setGuesses([...guesses, letter]);
        }}
        disabledLetters={guesses}
      />
    </Flex>
  );
};
