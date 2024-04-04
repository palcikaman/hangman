import { useState } from "react";
import { LivesSVG } from "./components/LivesSVG";
import { LetterInput } from "./components/LetterInput/LetterInput";
import { Guesses } from "./components/Guesses";
import { Flex } from "@chakra-ui/react";

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);

  return (
    <Flex direction="column" gap={4} alignItems="center">
      <LivesSVG />
      <Guesses guesses={guesses} />
      <LetterInput
        onLetterSelect={(letter) => {
          setGuesses([...guesses, letter]);
        }}
      />
    </Flex>
  );
}

export default App;
