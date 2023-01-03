import React from 'react';

function Card(prop) {
  const clickHandler = () => {
    console.log('first');
  };

  return (
    <div className="card" onClick={() => clickHandler} id={prop.name}>
      <p>Test</p>
      <img src={require('../images/' + prop.name)} alt="jesus" />
    </div>
  );
}

export default Card;
