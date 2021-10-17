import { useState } from 'react';
import './App.css';
import BoxFlip from './components/BoxFlip';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="App">
      <div>
        Run the following command to install the package.
        <pre>npm install react-box-flip</pre>
      </div>
      <div className="row" style={{ width: 350 }}>
        <div
          className="maincard"
          style={{ border: '1px solid', height: 300, padding: 10 }}
          onClick={handleClick}
        >
          <BoxFlip isFlipped={isFlipped}>
            <>
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading--span card__heading--span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day tour</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Upto 30 people</li>
                  <li>Difficulty Easy</li>
                </ul>
              </div>
            </>
            <>
              <div className="card__cta">
                <div className="card__price">
                  <p className="card__price--text">Only</p>
                  <div className="card__price--value">$297</div>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book Now
                </a>
              </div>
            </>
          </BoxFlip>
        </div>
      </div>
    </div>
  );
}

export default App;
