import React, { useState } from "react";

const QuoteCard = (props) => {
  let [author, setAuthor] = useState("Margaret Mead");
  let [quote, setQuote] = useState(
    "Always remember that you are absolutely unique. Just like everyone else."
  );

  const fetchQuote = () => {
    fetch("https://demotivational-quotes.p.rapidapi.com/api/quotes/random", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "demotivational-quotes.p.rapidapi.com",
        "x-rapidapi-key": "50c7194bdamshb0eb8a360c84412p1ad793jsn94b395dbc2ad",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data.author);
        setQuote(data.quote);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="quote-box" className="outerQuoteBox">
      <div className="innerQuoteBox">
        <h2 id="text">{quote}</h2>
        <p id="author">{`-${author}`}</p>
      </div>
      <div className="buttonBox">
        <button onClick={fetchQuote} className="btn bouncy" id="new-quote">
          newQuote
        </button>
        <a id="tweet-quote" href="http://www.twitter.com/intent/tweet">
          <button className="btn2">tweetQuote</button>
        </a>
      </div>
    </div>
  );
};

export default QuoteCard;
