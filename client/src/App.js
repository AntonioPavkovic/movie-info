import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import SignIn from "./Pages/SignIn";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  return (
    <Home />
  );
}

export default App;