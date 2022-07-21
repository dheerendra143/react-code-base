import React from "react";
import "./App.scss";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  let navigate = useNavigate();


  return (
    <div className="App">
      <header className="App-header">
        Hello dheeru
        <button
          onClick={() => {
           
            navigate("/login" );
          }}
        >
          login
        </button>
        <Link to="/dashboard">Dashboard</Link>
      </header>
    </div>
  );
}

export default App;
