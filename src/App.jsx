import React from "react";
import "./App.scss";
import {
  useParams,
  useNavigate,
  useLocation,
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
      </header>
    </div>
  );
}

export default App;
