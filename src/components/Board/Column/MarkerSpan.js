import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { faCircle } from '@fortawesome/free-regular-svg-icons'; 

const MarkerSpan = function( {movesHistory, squaresHistory, squareNum} ) {
    //Destructuring done by passing in as argument through function
    // const {movesHistory, squaresHistory, squareNum} = props;
    const marker = movesHistory[squaresHistory.indexOf(squareNum)];
    const xSymbol = <FontAwesomeIcon icon={faTimes} />;//<i className="fas fa-times"></i>
    const oSymbol = <FontAwesomeIcon icon={faCircle} />;//<i className="far fa-circle"></i>
  
    let icon = marker === "X" ? xSymbol : marker === "O" ? oSymbol : "";
    let color = marker === "X" ? "red-span" : "blue-span";
    
    return (
      <span 
        className={'marker-span ' + color}
        movesHistory={movesHistory} squaresHistory={squaresHistory}>
        {icon}
      </span>
    )
  }

  export default MarkerSpan;