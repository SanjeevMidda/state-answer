import { useState } from "react";
import "./index.css";

function App() {
  let letters = ["a", "b", "c", "d", "e", "f"];

  let randomLetter = () => {
    return letters[Math.floor(Math.random() * letters.length)];
  };

  let [answer, setAnswer] = useState("a");
  let [input, setInput] = useState("");
  let [status, setStatus] = useState(true);

  const finalLetter = "a";
  if (finalLetter === input) {
    setStatus(!status);
  }

  console.log(input);
  return (
    <div className="App">
      <div className="answer">{status ? answer : <h1>🎉</h1>}</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
