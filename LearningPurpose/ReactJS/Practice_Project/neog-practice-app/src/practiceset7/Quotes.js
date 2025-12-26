import React, { useEffect, useState } from "react";
import fakeQuotesFetch from "./fakeQuotesFetch";

const Quotes = () => {
  const [quote, setQuote] = useState({}); // Initialize as an empty object

  const fetchQuotes = async () => {
    const response = await fakeQuotesFetch(); // Fetch a random quote
    setQuote(response); // Update state with the fetched quote
  };

  useEffect(() => {
    fetchQuotes(); // Fetch the initial quote when the component mounts
  }, []); // The empty dependency array ensures this runs only once

  return (
    <React.Fragment>
      <div className="quote">
        <p>{quote.content}</p>
        <p>{quote.author}</p>
        <button onClick={fetchQuotes}>Random Quote</button>
      </div>
    </React.Fragment>
  );
};

export default Quotes;
