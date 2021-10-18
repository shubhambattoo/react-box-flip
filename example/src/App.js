import { useState } from 'react';
import ReactBoxFlip from 'react-box-flip'
import './App.css';

function App() {

  const [isFlipped, setIsFlipped] = useState(false)
  const [isFlippedV, setIsFlippedV] = useState(false)

  return (
    <main>
      <div class="container">
        <h1 class="title">ReactBoxFlip</h1>
        <div>
          <h2>Installation</h2>
          <p>
            To install ReactBoxFlip, just run the following command in your
            terminal:
          </p>
          <code>npm install --save react-box-flip</code>
          or with yarn:
          <code>yarn add react-box-flip</code>
        </div>
        <div>
          <h2>Demo</h2>
        </div>
        <div>
          <h3>Default</h3>
          <button class="btn" onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
          <div class="box-container">
            <ReactBoxFlip isFlipped={isFlipped}>
              <div className='front-box'>
                <img src="https://picsum.photos/300" alt="front" />
              </div>
              <div className='back-box'>
                <p>This is the back side</p>
              </div>
            </ReactBoxFlip>
          </div>
        </div>
        <div>
          <h3>Vertical</h3>
          <button class="btn" onClick={() => setIsFlippedV(!isFlippedV)} >Flip</button>
          <div class="box-container">
            <ReactBoxFlip isFlipped={isFlippedV} isVertical>
              <div className='front-box'>
                <img src="https://picsum.photos/300" alt="front" />
              </div>
              <div className='back-box'>
                <p>This is the back side</p>
              </div>
            </ReactBoxFlip>
          </div>
        </div>
        <footer>
          <p>
            Check out the code on <a href="https://github.com/shubhambattoo/react-box-flip">GitHub</a>.
          </p>
          <p>
            Made with <span role="img" aria-label="heart">❤️</span> by{' '}
            <a href="https://shubhambattoo.in">Shubham Bhattoo</a>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
