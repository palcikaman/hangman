import { PropsWithChildren, createContext, useContext, useState } from "react";

type GameContextValues = {
  length: number | "random";
  setLength: (length: number | "random") => void;
  answer: string | null;
  setAnswer: (answer: string | null) => void;
  guesses: string[];
  setGuesses: (guesses: string[]) => void;
  score: number;
  incScore: () => void;
  reset: () => void;
  resetStore: () => void;
};

const GameContext = createContext<GameContextValues>({
  length: "random",
  setLength: () => {},
  answer: null,
  setAnswer: () => {},
  guesses: [],
  setGuesses: () => {},
  score: 0,
  incScore: () => {},
  reset: () => {},
  resetStore: () => {},
});

export const GameContextProvider = ({ children }: PropsWithChildren) => {
  const [length, setLength] = useState<number | "random">("random");
  const [answer, setAnswer] = useState<string | null>(
    localStorage.getItem("answer")
  );
  const [score, setScore] = useState(
    Number(localStorage.getItem("score")) || 0
  );

  const storageGuesses = localStorage.getItem("guesses");
  const [guesses, setGuesses] = useState<string[]>(
    storageGuesses ? JSON.parse(storageGuesses) : []
  );

  const resetStore = () => {
    localStorage.removeItem("answer");
    localStorage.removeItem("guesses");
    localStorage.removeItem("score");
  };

  const reset = () => {
    setLength("random");
    setAnswer(null);
    setGuesses([]);
    setScore(0);
    resetStore();
  };

  return (
    <GameContext.Provider
      value={{
        length,
        setLength,
        answer,
        setAnswer: (answer) => {
          setAnswer(answer);
          answer && localStorage.setItem("answer", answer);
        },
        guesses,
        setGuesses: (guesses) => {
          setGuesses(guesses);
          localStorage.setItem("guesses", JSON.stringify(guesses));
        },
        score,
        incScore: () => {
          setScore((state) => {
            const score = state + 1;
            localStorage.setItem("score", score.toString());
            return score;
          });
        },
        reset,
        resetStore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
