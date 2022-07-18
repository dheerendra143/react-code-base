import React from "react";
import "./App.scss";
import getHost from "./utils/getHost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
        {getHost()}
      </header>
    </div>
  );
}

export default App;
