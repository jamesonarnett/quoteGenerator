import React from "react";

const ButtonBox = (props) => {
  const fetchQuote = () => {
    fetch("https://videogame-quotes-api.herokuapp.com/quotes")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="buttonBox">
      <button onClick={fetchQuote} className="btn" id="new-quote">
        newQuote
      </button>
      <a id="tweet-quote" href="#">
        <button className="btn">tweetQuote</button>
      </a>
    </div>
  );
};

export default ButtonBox;
