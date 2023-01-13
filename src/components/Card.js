import React from 'react';
import { useId } from 'react-id-generator';

function Card(prop) {
  const [htmlId] = useId();

  return (
    <img
      className="card"
      src={prop.path}
      alt={prop.name}
      id={htmlId}
      onClick={(e) => prop.onClick(e.target.alt)}
    />
  );
}

export default Card;
