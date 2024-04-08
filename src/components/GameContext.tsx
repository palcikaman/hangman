import { PropsWithChildren, createContext, useContext, useState } from "react";

type GameContextValues = {
  length: number | "random";
  setLength: (length: number | "random") => void;
  answer: string | null;
  setAnswer: (answer: string | null) => void;
  guesses: string[];
  setGuesses: (guesses: string[]) => void;
  reset: () => void;
};

const GameContext = createContext<GameContextValues>({
  length: "random",
  setLength: () => {},
  answer: null,
  setAnswer: () => {},
  guesses: [],
  setGuesses: () => {},
  reset: () => {},
});

export const GameContextProvider = ({ children }: PropsWithChildren) => {
  const [length, setLength] = useState<number | "random">("random");
  const [answer, setAnswer] = useState<string | null>(
    localStorage.getItem("answer")
  );

  const storageGuesses = localStorage.getItem("guesses");
  const [guesses, setGuesses] = useState<string[]>(
    storageGuesses ? JSON.parse(storageGuesses) : []
  );

  const reset = () => {
    setLength("random");
    setAnswer(null);
    setGuesses([]);
    localStorage.removeItem("answer");
    localStorage.removeItem("guesses");
  };

  return (
    <GameContext.Provider
      value={{
        length,
        setLength,
        answer,
        setAnswer: (answer) => {
          setAnswer(answer);
          answer
            ? localStorage.setItem("answer", answer)
            : localStorage.removeItem("answer");
        },
        guesses,
        setGuesses: (guesses) => {
          setGuesses(guesses);
          guesses.length
            ? localStorage.setItem("guesses", JSON.stringify(guesses))
            : localStorage.removeItem("guesses");
        },
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
