import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [size, setSizew] = useState(window.innerWidth);

  const putsize = () => {
    setSizew(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", putsize);

    return () => {
      window.removeEventListener("resize", putsize);
    };
  });
  return <div className="App">{size}</div>;
}
