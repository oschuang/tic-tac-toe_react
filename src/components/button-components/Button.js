import React from 'react';

const Button = function( {mode, btnText, currentPlayer, onClick} ) {
    //Give the appropriate mode btn active style and disable it from clicking
    let status1 = mode === "onePlayer" ? " active-btn disabled-btn" : "";
    let status2 = mode === "twoPlayer" ? " active-btn disabled-btn " : "";
    //Disable New Game btn while awaiting CPU to make move (right after user move, and before CPU's move)
    const cpuTurn = currentPlayer === "Player O" && mode === "onePlayer";
    let statusNewGame = cpuTurn ? " disabled-btn" : "";
    
    let realStatus = 
        btnText === 'One Player' ? status1 :
        btnText === 'Two Player' ? status2 :
        btnText === "New Game" ? statusNewGame : ""
    
    return (
      <button
        class={'mode-btn' + realStatus}
        onClick={onClick}>{btnText}</button>
    )
  }

  export default Button;