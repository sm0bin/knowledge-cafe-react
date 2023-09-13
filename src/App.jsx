import { useState } from "react";
import Header from "./componenet/Header";
import Main from "./componenet/Main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
