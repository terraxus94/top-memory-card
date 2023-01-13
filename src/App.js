import Card from './components/Card';
import imagesIndex from './images/imagesIndex';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const imagesIndexKeys = Object.keys(imagesIndex);
  const [imageOrder, setImageOrder] = useState(imagesIndexKeys);
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setImageOrder(shuffle(imagesIndexKeys));
  }, []);

  const clickHandler = (target) => {
    console.log(clickedImages);
    if (clickedImages.includes(target)) {
      gameRestart();
      return;
    }

    if (Boolean(clickedImages.length)) {
      setClickedImages([...clickedImages, target]);
    } else {
      setClickedImages([target]);
    }

    const newScore = score + 1;
    setScore(newScore);

    if (newScore > topScore) setTopScore(newScore);

    if (newScore === 16) {
      alert('Congratulations, you have won!');
      gameRestart(false);
    }

    setImageOrder(shuffle(imagesIndexKeys));
  };

  const gameRestart = (gameLost = true) => {
    if (gameLost) alert('nope, try again');
    setClickedImages([]);
    setScore(0);
    setImageOrder(shuffle(imagesIndexKeys));
  };

  return (
    <div className="main-container">
      <div className="app">
        <div className="introduction">
          <p className="text-class">to win click on every image once.</p>
        </div>
        <div className="cards-container">
          {imageOrder.map((key, i) => {
            return (
              <Card
                name={key}
                path={imagesIndex[key]}
                onClick={clickHandler}
                key={i}
              />
            );
          })}
        </div>
        <div className="scoreboard">
          <p className="text-class">
            score: {score}
            <br />
            top score: {topScore}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
