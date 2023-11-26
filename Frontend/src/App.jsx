import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {console.log(Error)});
  }, []);

  return (
    <>
      <h1>Let's Enjoy Jokes </h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((jokesData, index) => (
        <div className="" key={index}>
          <h3>{jokesData.type}</h3>
          <i>{jokesData.punchline}</i>
          <p>{jokesData.setup}</p>
        </div>
      ))}
    </>
  );
}

export default App;
