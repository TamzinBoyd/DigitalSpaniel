import React from "react";
import "./App.module.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;