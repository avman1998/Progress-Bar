import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      if (progress < 100) {
        console.log("less than 100", progress);
        setProgress((prev) => prev + 1);
      }
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  return (
    <div>
      <ProgressBar progress={progress} color={"#66C7EE"} />
      <ProgressBar progress={progress} color={"#EEF820"} />
      <ProgressBar progress={progress} color={"#F24E19"} />
    </div>
  );
}

export default App;
