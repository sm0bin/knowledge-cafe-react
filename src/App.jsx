import { useState } from "react";
import Header from "./componenet/header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
