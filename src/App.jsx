import React from "react";
import "./App.scss";
import getHost from "./utils/getHost";

function App() {
  const HOST = getHost();
  const getData = () => {
    fetch(`${HOST}/listUsers`).then((res) => res.json()).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        Hello dheeru
        {getData()}
      </header>
    </div>
  );
}

export default App;
