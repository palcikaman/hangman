import { Grid, Tag } from "@chakra-ui/react";

type GuessesProps = {
  guesses: string[];
};

export const Guesses = ({ guesses }: GuessesProps) => {
  return (
    <Grid gap={2} templateColumns="repeat(7, 40px)">
      {guesses.map((guess) => (
        <Tag>{guess}</Tag>
      ))}
    </Grid>
  );
};
