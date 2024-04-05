import { Flex, Grid, Tag } from "@chakra-ui/react";

type GuessesProps = {
  answer: string;
  guesses: string[];
};

export const Guesses = ({ answer, guesses }: GuessesProps) => {
  return (
    <>
      <Flex gap={1}>
        {[...answer.toUpperCase()].map((char, index) => (
          <Tag justifyContent="center" key={index}>
            {guesses.includes(char) && char}
          </Tag>
        ))}
      </Flex>
      <Grid gap={2} templateColumns="repeat(7, 24px)">
        {guesses
          .filter((guess) => !answer.toUpperCase().includes(guess))
          .map((guess) => (
            <Tag justifyContent="center" key={guess}>
              {guess}
            </Tag>
          ))}
      </Grid>
    </>
  );
};
