import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen></LoginScreen>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen/>}></Route>
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
