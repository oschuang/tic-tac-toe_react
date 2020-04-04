import React from "react";
import Square from "./Square";

const Column = function ({
  movesHistory,
  squaresHistory,
  squareNum,
  currentPlayer,
  gameOver,
  mode,
  makeMove,
  hardAI,
}) {
  return (
    <div className="column">
      <Square
        squareNum={squareNum + 1}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
        mode={mode}
        makeMove={makeMove}
        movesHistory={movesHistory}
        squaresHistory={squaresHistory}
        hardAI={hardAI}
      />
      <Square
        squareNum={squareNum + 2}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
        mode={mode}
        makeMove={makeMove}
        movesHistory={movesHistory}
        squaresHistory={squaresHistory}
        hardAI={hardAI}
      />
      <Square
        squareNum={squareNum + 3}
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

export default Column;
