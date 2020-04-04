import React from "react";
import Column from "./board-components/Column";

const Board = function ({
  movesHistory,
  squaresHistory,
  currentPlayer,
  gameOver,
  mode,
  makeMove,
  hardAI,
}) {
  return (
    <div id="board">
      <Column
        squareNum={0}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
        mode={mode}
        makeMove={makeMove}
        movesHistory={movesHistory}
        squaresHistory={squaresHistory}
        hardAI={hardAI}
      />
      <Column
        squareNum={3}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
        mode={mode}
        makeMove={makeMove}
        movesHistory={movesHistory}
        squaresHistory={squaresHistory}
        hardAI={hardAI}
      />
      <Column
        squareNum={6}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
        mode={mode}
        makeMove={makeMove}
        movesHistory={movesHistory}
        squaresHistory={squaresHistory}
        hardAI={hardAI}
      />
    </div>
  );
};

export default Board;
