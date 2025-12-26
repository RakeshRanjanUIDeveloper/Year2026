import React, { useEffect, useState } from 'react';
import { fakeQuoteFetch } from './fakeQuoteFetch';

const Quote = () => {
    const [quotes, setQuotes] = useState([]); // Store all quotes
    const [currentQuote, setCurrentQuote] = useState(null); // Store the displayed quote
    const [loading, setLoading] = useState(true); // Track loading state

    const fetchQuoteData = async () => {
        try {
            const response = await fakeQuoteFetch(); // Fetch all quotes
            setQuotes(response); // Store all quotes
            setCurrentQuote(response[Math.floor(Math.random() * response.length)]); // Pick a random quote
            setLoading(false); // Set loading to false once data is available
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchQuoteData();
    }, []);

    const handleQuote = () => {
        if (quotes.length > 0) {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setCurrentQuote(randomQuote);
            console.log(randomQuote);
        }
    };

    return (
        <React.Fragment>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <React.Fragment>
                    <ul>
                        <li>
                            "{currentQuote.content}" - <strong>{currentQuote.author}</strong>
                        </li>
                    </ul>
                    <button onClick={handleQuote}>New Quote</button>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Quote;
