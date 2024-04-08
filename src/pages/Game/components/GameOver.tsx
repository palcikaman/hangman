import { Text } from "@chakra-ui/react";

type GameOverProps = { dead: boolean };

export const GameOver = ({ dead }: GameOverProps) => (
  <>
    {dead ? (
      <Text color="red">YOU DIED</Text>
    ) : (
      <Text color="green">You're winner</Text>
    )}
  </>
);
