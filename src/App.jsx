import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  // below when want to use scroll, needs to match that in navbar

  // <Element name="myScrollToElement"></Element>
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
