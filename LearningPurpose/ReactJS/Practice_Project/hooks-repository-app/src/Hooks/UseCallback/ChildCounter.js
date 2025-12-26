import React from 'react'

const ChildCounter = React.memo(({onClickHandler}) => {
        console.log("Child re render")
      return (
        <button onClick={onClickHandler}>Clike me on Child</button>
      )
    }
) 

export default ChildCounter