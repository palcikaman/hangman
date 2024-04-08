import { useWords } from "../../util/useWords";
import { Button, Text } from "@chakra-ui/react";
import { LengthSelector } from "./components/LengthSelector";
import { useGameContext } from "../../components/GameContext";

export const Home = () => {
  const { getRandomWord } = useWords();

  const { setAnswer, length } = useGameContext();

  return (
    <>
      <Text textAlign="center">
        Let's play <strong>Hangman!</strong>
        <br />
        How many letters do you want in your word?
      </Text>
      <LengthSelector />
      <Button
        onClick={() => setAnswer(getRandomWord(length))}
        colorScheme="black"
        margin="auto"
        size="lg"
      >
        Let's Play!
      </Button>
    </>
  );
};
