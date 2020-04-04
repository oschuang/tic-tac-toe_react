import React from "react";
import Button from "./button-components/Button";

const ButtonWrapper = function ({
  mode,
  currentPlayer,
  toggleMode,
  restartGame,
}) {
  /*
    Buttons render based on status of mode
    Game begins by default on one player mode
    There are three conditions:
    1. One player mode: Left Button: One Player; Right Button: New Game
    2. Two player mode: L: New Game; R: Two Player
    3. Null (user clicked New Game button): L: One Player; R: Two Player
    
    Player must choose a Game Mode to start the game.
    Once a mode is changed, the setting is locked unless the user selects New Game.
    */
  const onePlayerBtn = (
    <Button
      btnText="One Player"
      onClick={() => {
        toggleMode("onePlayer");
      }}
      mode={mode}
    />
  );

  const twoPlayerBtn = (
    <Button
      btnText="Two Player"
      onClick={() => {
        toggleMode("twoPlayer");
      }}
      mode={mode}
    />
  );

  const newGameBtn = (
    <Button
      btnText="New Game"
      onClick={restartGame}
      mode={mode}
      currentPlayer={currentPlayer}
    />
  );

  const getLeftButton = function () {
    if (mode === "onePlayer" || mode === null) {
      return onePlayerBtn;
    } else if (mode === "twoPlayer") {
      return newGameBtn;
    }
  };

  const getRightButton = function () {
    if (mode === "onePlayer") {
      return newGameBtn;
    } else if (mode === "twoPlayer" || mode === null) {
      return twoPlayerBtn;
    }
  };

  return (
    <div id="mode-btn-wrapper">
      {getLeftButton()}
      {getRightButton()}
    </div>
  );
};

export default ButtonWrapper;
