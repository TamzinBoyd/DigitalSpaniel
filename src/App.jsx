import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  );
};

export default App;
