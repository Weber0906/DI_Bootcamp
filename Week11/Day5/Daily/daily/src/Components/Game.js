import React, { useState, useEffect } from 'react';
import Card from './Card';
import { superheroes } from './Superheroes';
import Navbar from './Navbar';

const Game = () => {
  const [cards, setCards] = useState(superheroes);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffledCards = [...prevCards];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
      }
      return shuffledCards;
    });
  };

  const handleCardClick = (clickedId) => {
    if (clickedCards.has(clickedId)) {
      handleGameOver();
    } else {
      setClickedCards((prevClickedCards) => new Set(prevClickedCards).add(clickedId));
      increaseScore();
      shuffleCards();
    }
  };

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleGameOver = () => {
    setTopScore((prevTopScore) => Math.max(prevTopScore, score));
    setScore(0);
    setClickedCards(new Set());
  };

  return (
    <div className="game">
      <Navbar score={score} topScore={topScore} />
      {cards.map((superhero) => (
        <Card
          key={superhero.id}
          superhero={superhero}
          onClick={handleCardClick}
        />
      ))}
      <div className="scores">
        <span>Score: {score}</span>
        <span>Top Score: {topScore}</span>
      </div>
    </div>
  );
};

export default Game;