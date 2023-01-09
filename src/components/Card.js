import React from 'react';
import { useId } from 'react-id-generator';

function Card(prop) {
  const clickHandler = (event) => {
    console.log('first');
  };
  const [htmlId] = useId();

  return (
    <img
      className="card"
      src={prop.path}
      alt={prop.name}
      id={htmlId}
      onClick={(e) => clickHandler(e)}
    />
  );
}

export default Card;
