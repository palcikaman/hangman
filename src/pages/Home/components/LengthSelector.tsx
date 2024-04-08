import { Button, Grid } from "@chakra-ui/react";
import { useWords } from "../../../util/useWords";
import { useGameContext } from "../../../components/GameContext";

export const LengthSelector = () => {
  const { wordOptions } = useWords();

  const { length, setLength } = useGameContext();

  return (
    <Grid
      margin="auto"
      templateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]}
      justifyContent="space-between"
      gap={2}
    >
      {wordOptions.map((number) => (
        <Button
          width={10}
          margin="auto"
          isActive={length === number}
          onClick={() => setLength(number)}
          key={number}
          variant="outline"
          color="black"
        >
          {number}
        </Button>
      ))}
      <Button
        gridColumn={["1/4", "1 / 5"]}
        isActive={length === "random"}
        onClick={() => setLength("random")}
        variant="outline"
        color="black"
      >
        Random
      </Button>
    </Grid>
  );
};
