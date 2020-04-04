import React from 'react';
import MarkerSpan from './MarkerSpan';

const Square = function( {movesHistory, squaresHistory, squareNum, currentPlayer, gameOver, mode, makeMove, hardAI} ) {
    const marker = movesHistory[squaresHistory.indexOf(squareNum)];
    const usedSquare = squaresHistory.includes(squareNum);
    const cpuTurn = currentPlayer === "Player O" && mode === "onePlayer";
    
    //Disable square if; 1) already filled, 2) game has ended, 3) while awaiting CPU turn
    let activeStatus = usedSquare || gameOver || cpuTurn ? "disabled-square" : "";
    //Disable and dim all squares on beginning bc user must select mode first
    let locked = mode === null ? "locked-square-start" : "";
    
    //Square bg and hover color changes based on 'X' or 'O'
    let backgroundColor = marker === 'X' ? 'red-square' : marker === 'O' ? 'blue-square' : "";
    let hoverColor = currentPlayer === 'Player X' ? "hover-x" : currentPlayer === 'Player O' ? "hover-o" : "";
    
    /*
    Main logic for how game runs
    One Player Mode:
      1. Player X makes move
      (promise gets resolved ---> runs .then())
      2. CPU (Player O) makes move
    Two Player mode:
      1. Player X makes move
      2. Player O makes move
    */
    function runGame() {
      const gamePromise = new Promise( (resolve, reject) => {
        makeMove(squareNum);
        // console.log("Player has made their move");
        if (mode === 'onePlayer') {
          //Resolves only on one player mode cause AI only runs on one player mode
          resolve();
        }
      })
      .then( () => {
        // console.log("CPU's turn");
        setTimeout(hardAI, 350);
      })
    }
    
    return (
      <div 
        className={"square " + activeStatus + " " + backgroundColor + " " + hoverColor + " " + locked}
        onClick={runGame} >
          <MarkerSpan 
            squareNum={squareNum} 
            movesHistory={movesHistory} squaresHistory={squaresHistory} />
      </div>
    )
  }

  export default Square;