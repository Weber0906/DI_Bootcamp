import React, { useState } from 'react';
import quotes from './quotes'; // Assuming the quotes file is in the same directory

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  const getRandomQuote = () => {
    // Generate a random index to get a quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    
    // Check if the new quote is the same as the current one, and generate a new quote if they match
    if (newQuote.quote === currentQuote.quote) {
      return getRandomQuote();
    }
    
    // Update the current quote
    setCurrentQuote(newQuote);
    
    // Change the background, header, and button colors
    const colors = ['red', 'blue', 'green', 'yellow']; // Add more colors as desired
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById('quote-header').style.color = randomColor;
    document.getElementById('new-quote-btn').style.backgroundColor = randomColor;
  };

  return (
    <div className="quote-container">
      <h1 id="quote-header">{currentQuote.quote}</h1>
      <p>{currentQuote.author}</p>
      <button id="new-quote-btn" onClick={getRandomQuote}>New Quote</button>
    </div>
  );
};

export default QuoteGenerator;