import { useState } from "react";
import Header from "./componenet/Header";
import Container from "./componenet/Container";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container />
    </>
  );
}

export default App;
