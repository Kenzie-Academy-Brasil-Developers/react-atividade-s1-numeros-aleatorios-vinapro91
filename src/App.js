import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <div className="Number">{number}</div>
      <button onClick={() => randomNumber()}> Criar novo número</button>
    </div>
  );
}

export default App;
