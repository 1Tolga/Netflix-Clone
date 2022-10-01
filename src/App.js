import React from 'react';
import HomeScreen from './HomeScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;