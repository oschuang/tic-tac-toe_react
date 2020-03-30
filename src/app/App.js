import React from 'react';
import './App.css';

import ButtonWrapper from '../components/ButtonWrapper/ButtonWrapper';
import Board from '../components/Board/Board';
import Overlay from '../components/Overlay/Overlay';

import { getRandomNum, removeLastElem, getRemainingNum, getSharedNums } from '../utils/helpers';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //Symbol to be rendered, starts with X
      mode: 'onePlayer',
      marker: "X",
      //Order of what # squares were used up
      squaresHistory: [], //[4, 2, 6],
      //Order of player/CPU movesHistory, either "X" or "O", matches with squaresHistory
      movesHistory: [], //['x', 'o', 'x'],
      currentPlayer: "Player X",
      xMoves: [],
      oMoves: [],
      gameOver: false,
      resultMessage: "",
      // turnHistory: [],
      //Stores square num and what marker it holds; starts with placeholder values; is iterated over to check for a win
      gameBoard: {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I'
      },
      
    }
    
    this.toggleMode = this.toggleMode.bind(this);
    this.makeMove = this.makeMove.bind(this);
    this.recordMove = this.recordMove.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.checkDraw = this.checkDraw.bind(this);
    this.endGame = this.endGame.bind(this);
    this.hardAI = this.hardAI.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.undoMove = this.undoMove.bind(this);
    this.eliminateWinCombo = this.eliminateWinCombo.bind(this);
    this.getRandomSquare = this.getRandomSquare.bind(this);
    
    this.defaultBoard = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I'
      }
    
    this.winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ]
    
    this.mapWinCombos = new Map( [
        [ [1, 2, 3], true ],
        [ [4, 5, 6], true ],
        [ [7, 8, 9], true ],
        [ [1, 4, 7], true ],
        [ [2, 5, 8], true ],
        [ [3, 6, 9], true ],
        [ [1, 5, 9], true ],
        [ [3, 5, 7], true ]
      ] );
    
  }
  
  
  toggleMode(mode) {
    this.setState({
      mode: mode
    });
  }
  
  ////FUNCTIONS FOR MAKING A MOVE
  //***PRIMARY function, runs on click
 makeMove(squareNum) {
    const promise = new Promise( (resolve, reject) => {
      this.recordMove(squareNum);
      this.setState({
        gameBoard: {...this.state.gameBoard, [squareNum]: this.state.marker}
      })
      resolve()
    })
      .then( () => {
          this.checkWin();
      })
      .then( () => {
        if (this.state.movesHistory.length === 9) {
          this.checkDraw();
        }
      })
      .then( () => {
        if (!this.state.gameOver) {
          this.changeTurn();
        }
      })
  }
  
  //records moves to movesHistory and squaresHistory
  recordMove(squareNum) {
    this.setState({
      movesHistory: [...this.state.movesHistory, this.state.marker],
      squaresHistory: [...this.state.squaresHistory, squareNum],
    })
    
    if (this.state.marker === 'X') {
      this.setState({
        xMoves: [...this.state.xMoves, squareNum]
      })
    } else {
      this.setState({
        oMoves: [...this.state.oMoves, squareNum]
      })
    }
  }

  changeTurn() {
    let nextMarker = this.state.marker === 'X' ? 'O' : 'X';
    let nextPlayer = this.state.currentPlayer === 'Player X' ? "Player O" : "Player X";
    this.setState({
      marker: nextMarker,
      currentPlayer: nextPlayer
    })
  }
  
  checkWin() {
    const {gameBoard, currentPlayer} = this.state;
    this.winningCombinations.forEach(arr => {
      if (gameBoard[arr[0]] === gameBoard[arr[1]] && 
          gameBoard[arr[0]] === gameBoard[arr[2]]) {
        this.endGame();
        this.setState({
          resultMessage: `${currentPlayer} wins!`
        })
      }
    })
  }
  
  checkDraw() {
    //Only runs if board filled up and no winner was found
    if (!this.state.gameOver) {
      this.endGame();
      this.setState({
          resultMessage: "It's a draw!"
      })
    }
  }
  
  endGame() {
    this.setState({
      gameOver: true
    })
  }
  //////////////////
  
  /*
  AI runs 3 ways:
  1. On the very first move: picks a random square
  2. After that, it picks moves based on opponent's X's. 
     If the AI finds that X can win on their next turn, the AI will make a move to stop X.
  3. Otherwise, if a potential win is not detected, the AI will just pick a random move
  */
  hardAI() {
    //Used this condition otherwise game keeps running even after board is filled up (timeout/async issue)
    if (!this.state.gameOver) {
      const {oMoves, xMoves} = this.state;
      const {mapWinCombos, eliminateWinCombo, makeMove, getRandomSquare} = this;
      let noMatch = true;
      let nextSquare;
      const firstMove = oMoves.length < 1;
      
      //Condition One
      if (firstMove) {
        noMatch = false;
        nextSquare = getRandomSquare();
      } 
      //Condition Two: X can win next turn, so AI must stop X
      else {
        for (let winCombo of mapWinCombos.keys()) {
          if (mapWinCombos.get(winCombo)) {
            let sharedNums = getSharedNums(winCombo, xMoves);
            const winComboFound = getSharedNums(winCombo, xMoves).length === 2;
            if (winComboFound) {
              noMatch = false;
              nextSquare = getRemainingNum(winCombo, sharedNums);
              console.log('combo found')
              //Stop checking over remaining combos since a move was made; this stops it from making more than one move at a time
              break; 
            }
          }
        }
      }
      //Condition Three: Not first move, and X can't win next turn
      if (noMatch) {
        nextSquare = getRandomSquare();
      }
      makeMove(nextSquare);
      eliminateWinCombo(nextSquare, mapWinCombos);
    }
  }
  
  getRandomSquare() {
    let randomSquare = getRandomNum();
    // console.log(this.state.squaresHistory)
    // console.log(randomSquare)    
    if (this.state.squaresHistory.includes(randomSquare)) {
      // console.log("getting new number...")
      while (this.state.squaresHistory.includes(randomSquare)) {
        randomSquare = getRandomNum();
      }
    }
    return randomSquare;
  }
  
  //if a square was used, then any combo that uses it is no longer viable, so eliminate it from checking
  eliminateWinCombo(squareNum, map) {
    for (let key of map.keys()) {
      if (key.includes(squareNum) && map.get(key)) {
        map.set(key, false)
      }
    }
  }

  //Need to fix cause of Map
  undoMove() {
    const {marker, squaresHistory, movesHistory, gameBoard, xMoves, oMoves, gameOver} = this.state;
    let lastUsedSquare = squaresHistory[squaresHistory.length - 1];
    if (movesHistory.length > 0 && !gameOver) {
      this.changeTurn();
      this.setState({
        //Remove last recorded move
        squaresHistory: removeLastElem(squaresHistory), 
        movesHistory: removeLastElem(movesHistory),
        xMoves: marker === 'O' ? removeLastElem(xMoves) : xMoves,
        oMoves: marker === 'X' ? removeLastElem(oMoves) : oMoves,
        //Reset last used square to its default placeholder value
        gameBoard: {
          ...gameBoard, [lastUsedSquare]: this.defaultBoard[lastUsedSquare]
        }
      })
    }
  }
  
  restartGame() {
    //Reset all values to default
    this.setState({
      currentPlayer: "Player X",
      marker: "X",
      squaresHistory: [],
      movesHistory: [],
      gameBoard: {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I'
      },
      xMoves: [],
      oMoves: [],
      gameOver: false,
      mode: null,
    })
    this.mapWinCombos = new Map( [
        [ [1, 2, 3], true ],
        [ [4, 5, 6], true ],
        [ [7, 8, 9], true ],
        [ [1, 4, 7], true ],
        [ [2, 5, 8], true ],
        [ [3, 6, 9], true ],
        [ [1, 5, 9], true ],
        [ [3, 5, 7], true ]
      ] );
  }
  
  playAgain(mode) {
    this.restartGame();
    this.setState({
      mode: mode
    })
  }
  
  
  render() {
    return (
      <React.Fragment>
        <h1 class='header'>Play Tic Tac Toe</h1>
        <ButtonWrapper
          mode={this.state.mode}
          currentPlayer={this.state.currentPlayer}
          toggleMode={this.toggleMode}
          restartGame={this.restartGame} />
        <Board 
          mode={this.state.mode} gameOver={this.state.gameOver}
          currentPlayer={this.state.currentPlayer}
          makeMove={this.makeMove} 
          hardAI={this.hardAI}
          movesHistory={this.state.movesHistory} 
          squaresHistory={this.state.squaresHistory} />
        <Overlay 
          mode={this.state.mode}
          gameOver={this.state.gameOver}
          playAgain={this.playAgain} 
          restartGame={this.restartGame} 
          resultMessage={this.state.resultMessage} />
        
        {/* 
        <button onClick={this.undoMove}>UNDO MOVE</button>
        */
        }
      </React.Fragment>
    )
  }
}

export default App;

//***Helper Functions***
//returns num b/t 1-9 inclusive


/*
TO-DO:

- Fix Undo Move function
- Change AI so that it acts offensively (detects possibility to win, use another Map with oMoves?)

Other:
- Let players choose their symbol
- Easy/med/hard AI opponents

*/

