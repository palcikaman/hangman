import { useState } from "react";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";

function App() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <>{answer ? <Game answer={answer} /> : <Home onStart={setAnswer} />}</>
  );
}

export default App;
