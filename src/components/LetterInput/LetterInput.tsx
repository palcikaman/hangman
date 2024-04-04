import { Button, Grid } from "@chakra-ui/react";
import { LETTERS } from "./LETTERS";

type LetterInputProps = {
  onLetterSelect: (letter: string) => void;
};

export const LetterInput = ({ onLetterSelect }: LetterInputProps) => (
  <Grid gap={2} templateColumns="repeat(7, 40px)">
    {LETTERS.map((letter) => (
      <Button onClick={() => onLetterSelect(letter)} key={letter}>
        {letter}
      </Button>
    ))}
  </Grid>
);
