import { useState } from "react";
import Countdown from "./components/Countdown";
import Mainpage from "./layouts/Mainpage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Countdown/>
      {/* <Mainpage/> */}
    </>
  );
}

export default App;
