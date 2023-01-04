import Card from './components/Card';
import imagesIndex from './images/imagesIndex';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="app">
        <div className="cards-container">
          {Object.keys(imagesIndex).map((key) => {
            return <Card name={key} path={imagesIndex[key]} />;
          })}
        </div>
        <div className="scoreboard"></div>
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
