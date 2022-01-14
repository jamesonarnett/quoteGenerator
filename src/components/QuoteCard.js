import React from "react";
import ButtonBox from "./ButtonBox";

const QuoteCard = (props) => {
  return (
    <div id="quote-box" className="outerQuoteBox">
      <div className="innerQuoteBox">
        <h2 id="text">Quote Here</h2>
        <p id="author">Author Name Here</p>
      </div>
      <ButtonBox />
    </div>
  );
};

export default QuoteCard;
