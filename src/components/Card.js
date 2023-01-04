import React from 'react';

function Card(prop) {
  const clickHandler = () => {
    console.log('first');
  };

  return (
    <div className="card" id={prop.name}>
      <img src={prop.path} alt="jesus" onClick={() => clickHandler()} />
    </div>
  );
}

export default Card;
