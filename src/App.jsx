import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchAPI from "./components/FetchAPI";
import Axios from "./components/Axios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FetchAPI /> */}
      <Axios />
    </>
  );
}

export default App;
