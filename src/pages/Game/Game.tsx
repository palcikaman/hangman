import { Button, Flex, Stack } from "@chakra-ui/react";
import { Lives } from "./components/Lives";
import { LetterInput } from "./components/LetterInput/LetterInput";
import { Guesses } from "./components/Guesses";
import { GameOver } from "./components/GameOver";
import { useGameContext } from "../../components/GameContext";
import { useWords } from "../../util/useWords";
import { useState } from "react";
import { Instructions } from "../Instructions";

export const Game = () => {
  const [tutorial, setTutorial] = useState(false);

  const { getRandomWord } = useWords();

  const { length, answer, setAnswer, guesses, setGuesses, reset } =
    useGameContext();

  const lostLives = guesses.filter(
    (guess) => !answer?.toUpperCase().includes(guess)
  ).length;

  const over =
    lostLives > 5 ||
    (answer &&
      [...answer.toUpperCase()].every((char) => guesses.includes(char)));

  return tutorial ? (
    <Instructions onBack={() => setTutorial(false)} />
  ) : (
    <Flex
      gap={4}
      direction={["column", "column", "row"]}
      alignItems={["center", "center", "flex-start"]}
    >
      <Lives lostLives={lostLives} />
      <Stack gap={4}>
        {over && <GameOver dead={lostLives > 5} />}
        <Guesses />
        {!over && (
          <LetterInput
            onLetterSelect={(letter) => {
              setGuesses([...guesses, letter]);
            }}
            disabledLetters={guesses}
          />
        )}
        <Flex gap={4} direction={["column", "row"]}>
          <Button onClick={reset} variant="outline" margin="auto">
            End Game
          </Button>

          <Button
            onClick={() => {
              setAnswer(getRandomWord(length));
              setGuesses([]);
            }}
            colorScheme="black"
            margin="auto"
          >
            Start New Game
          </Button>
        </Flex>
        <Button onClick={() => setTutorial(true)} variant="link" mt={4}>
          Instructions
        </Button>
      </Stack>
    </Flex>
  );
};
