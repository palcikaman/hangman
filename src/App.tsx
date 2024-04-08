import { Game } from "./pages/Game/Game";
import { Home } from "./pages/Home/Home";
import { useGameContext } from "./components/GameContext";
import { Container, Heading, Stack } from "@chakra-ui/react";

function App() {
  const { answer } = useGameContext();

  return (
    <Container centerContent marginTop={4}>
      <Stack gap={[4, 4, 8]}>
        <Heading textAlign="center">The Hangman</Heading>
        {answer ? <Game /> : <Home />}
      </Stack>
    </Container>
  );
}

export default App;
