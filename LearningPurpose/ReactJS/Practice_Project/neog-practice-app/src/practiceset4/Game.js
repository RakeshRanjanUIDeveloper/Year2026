import React, { useState } from 'react'

const Game = () => {
    const [currentNumber, setCurrentNumber] = useState(3);
    const handleNumber = () =>{
        if (currentNumber > 0) {
            setCurrentNumber((prev) => prev-1);
        }
    }
  return (
   <React.Fragment>
        <p>Current Lives : {currentNumber}</p>
        <button onClick={handleNumber} disabled={currentNumber === 0}>Lose a Life</button>
        {
            currentNumber=== 0 ? 'Game Over' : ''
        }
   </React.Fragment>
  )
}

export default Game