import React, { useState } from 'react';
import quotes from './quotes';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  const getRandomQuote = () => {
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    
   
    if (newQuote.quote === currentQuote.quote) {
      return getRandomQuote();
    }
    
   
    setCurrentQuote(newQuote);
    
    
    const colors = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FFA500', '#800080', '#FFC0CB', '#00FFFF', '#808080', '#A52A2A'];

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