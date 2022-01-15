import React, { Component } from "react";
import QuoteCard from "./components/QuoteCard";
import Title from "./components/Title";

const App = (props) => {
  return (
    <div>
      <Title />
      <QuoteCard />
    </div>
  );
};

export default App;
