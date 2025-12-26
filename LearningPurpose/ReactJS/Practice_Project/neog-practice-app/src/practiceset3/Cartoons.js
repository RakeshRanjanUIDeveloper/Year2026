import React from 'react'

const Cartoons = ({cartoons, superpower}) => {

    const character = cartoons.find((cartoon) => cartoon.superpower === superpower)
  return (
    <React.Fragment>
    <ul>
    {
        cartoons.filter((cartoon) => cartoon.magnitude >5).map((cartoon) => <li key={cartoon.id}>{cartoon.name} - {cartoon.superpower} -{cartoon.magnitude}</li>)
    }
    </ul>
    <h2>display only the names of characters whose magnitude is an even number</h2>
    <ul>
    {
        cartoons.filter((cartoon) => cartoon.magnitude%2 === 0).map((cartoon) => <li key={cartoon.id}>{cartoon.name} - {cartoon.magnitude}</li>)
    }
    </ul>
    <h2>Character with Superpower: {superpower}</h2>
      {character ? (
        <p>
          {character.name} - {character.superpower} - {character.magnitude}
        </p>
      ) : (
        <p>No character found with the superpower "{superpower}".</p>
      )}
    </React.Fragment>

  )
}

export default Cartoons