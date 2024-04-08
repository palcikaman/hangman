import { Button, Grid } from "@chakra-ui/react";
import { LETTERS } from "./LETTERS";

type LetterInputProps = {
  onLetterSelect: (letter: string) => void;
  disabledLetters?: string[];
};

export const LetterInput = ({
  onLetterSelect,
  disabledLetters,
}: LetterInputProps) => (
  <Grid
    gap={2}
    templateColumns={["repeat(5, 40px)", "repeat(6, 40px)", "repeat(7, 40px)"]}
    justifyContent="center"
  >
    {LETTERS.map((letter) => (
      <Button
        onClick={() => onLetterSelect(letter)}
        key={letter}
        isDisabled={disabledLetters?.includes(letter)}
        variant="outline"
        colorScheme="gray"
      >
        {letter}
      </Button>
    ))}
  </Grid>
);
