import { Button, Flex, Stack } from "@chakra-ui/react";
import { Lives } from "./components/Lives";
import { LetterInput } from "./components/LetterInput/LetterInput";
import { Guesses } from "./components/Guesses";
import { GameOver } from "./components/GameOver";
import { useGameContext } from "../../components/GameContext";
import { useWords } from "../../util/useWords";
import { Instructions } from "../Instructions";
import { MAX_LIVES } from "../../config/const";

export const Game = () => {
  const { getRandomWord } = useWords();

  const {
    length,
    answer,
    setAnswer,
    guesses,
    setGuesses,
    score,
    incScore,
    reset,
  } = useGameContext();

  const lostLives = guesses.filter(
    (guess) => !answer?.toUpperCase().includes(guess)
  ).length;

  const over =
    lostLives >= MAX_LIVES ||
    (answer &&
      [...answer.toUpperCase()].every((char) => guesses.includes(char)));

  return (
    <Flex
      gap={4}
      direction={["column", "column", "row"]}
      alignItems={["center", "center", "flex-start"]}
    >
      <Lives score={score} lostLives={lostLives} />
      <Stack gap={4}>
        {over && <GameOver dead={lostLives >= MAX_LIVES} />}
        <Guesses />
        {!over && (
          <LetterInput
            onLetterSelect={(letter) => {
              if (answer && !answer.toUpperCase().includes(letter)) {
                incScore();
              }
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
        <Instructions />
      </Stack>
    </Flex>
  );
};
