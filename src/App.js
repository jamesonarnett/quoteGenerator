import React, { Component } from "react";
import QuoteCard from "./components/QuoteCard";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Quote Genie</h1>

        <QuoteCard />
      </div>
    );
  }
}

export default App;
