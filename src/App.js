import Card from './components/Card';
import imagesIndex from './images/imagesIndex';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // function randomize - invoke on component mount
  const Shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // display alert on restart
  // display alert on win
  // function that updates state when you click on images
  // function that clears state on restart
  // console.log(Object.keys(imagesIndex));
  // console.log(Shuffle(Object.keys(imagesIndex)));

  return (
    <div className="main-container">
      <div className="app">
        <div className="introduction">
          <p className="text-class">
            the goal is to click on as many different images as possible during
            one game. the game restarts when you click twice on the same image.
            to win the game click on every image once.
          </p>
        </div>
        <div className="cards-container">
          {Object.keys(imagesIndex).map((key) => {
            return <Card name={key} path={imagesIndex[key]} />;
          })}
        </div>
        <div className="scoreboard">
          <p className="text-class">
            score: {}
            <br />
            top score: {}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

// structure
// app
// - cards container
// - - cards
// - scoreboard
// - - current score and best score
