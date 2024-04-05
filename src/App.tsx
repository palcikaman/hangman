import { useState } from "react";
import { Lives } from "./components/Lives";
import { LetterInput } from "./components/LetterInput/LetterInput";
import { Guesses } from "./components/Guesses";
import { Flex } from "@chakra-ui/react";
import { WORDS } from "./config/hangman_words";
import { getRandomArrayElement } from "./util/functions";

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string | null>(
    getRandomArrayElement(WORDS)
  );

  return (
    <Flex direction="column" gap={4} alignItems="center">
      <Lives
        lostLives={
          guesses.filter((guess) => !answer?.toUpperCase().includes(guess))
            .length
        }
      />
      {answer && <Guesses answer={answer} guesses={guesses} />}
      <LetterInput
        onLetterSelect={(letter) => {
          setGuesses([...guesses, letter]);
        }}
        disabledLetters={guesses}
      />
    </Flex>
  );
}

export default App;
