import { Flex, Tag } from "@chakra-ui/react";
import { useGameContext } from "../../../components/GameContext";

export const Guesses = () => {
  const { answer, guesses } = useGameContext();

  return (
    answer && (
      <>
        <Flex gap={1}>
          {[...answer.toUpperCase()].map((char, index) => (
            <Tag
              justifyContent="center"
              key={index}
              variant="outline"
              size={["sm", "md", "lg"]}
              color="black"
            >
              {guesses.includes(char) && char}
            </Tag>
          ))}
        </Flex>
        {/* TODO delete/move */}
        {/* <Flex gap={2}>
          {guesses
            .filter((guess) => !answer.toUpperCase().includes(guess))
            .map((guess) => (
              <Tag
                justifyContent="center"
                key={guess}
                variant="outline"
                color="black"
              >
                {guess}
              </Tag>
            ))}
        </Flex> */}
      </>
    )
  );
};
