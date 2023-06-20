import React from 'react';


const Card = ({ superhero, onClick}) => {
  return (
    <div className="card" onClick={()=>onClick(superhero.id)}>
      <img src={superhero.image} alt={superhero.name} />
      <h3>{superhero.name}</h3>
      <p>Occupation: {superhero.occupation}</p>
    </div>
  );
};

export default Card;