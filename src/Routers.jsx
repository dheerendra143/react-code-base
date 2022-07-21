import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import App from "./App";
import Main from "./components/Dashboard/Main"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Main />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;