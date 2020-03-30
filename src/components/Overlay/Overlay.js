import React from 'react';

//Appears at end of a game; Has no child components
const Overlay = function( {gameOver, mode, playAgain, restartGame, resultMessage} ) {
    let display = gameOver ? "" : "hidden";
    
    return (
      <div class={"overlay " + display}>
        <div class="overlay-content-wrapper">
  
          <span class='overlay-span'>{resultMessage}</span>
          <span class='overlay-span'>Play again?</span>
          <div id='overlay-btn-wrapper'>
            <button
              class="overlay-btn"
              onClick={() => playAgain(mode)}>YES</button>
            <button
              class="overlay-btn"
              onClick={restartGame}>NO</button>
          </div>
  
        </div>
      </div> 
    )
  }

  export default Overlay;
  