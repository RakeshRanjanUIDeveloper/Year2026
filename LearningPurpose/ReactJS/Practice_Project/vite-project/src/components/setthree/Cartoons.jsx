import React from "react";

const Cartoons = ({cartoons, superpower}) => {
  const magnitudeGreaterThanFive = cartoons.filter((c) => c.magnitude > 5)
  const magnitudeEvenNumber = cartoons.filter((c) => c.magnitude%2 === 0);
  const superPowerIntelligence = cartoons.filter((c) => c.superpower=== superpower)
  return (
    <React.Fragment>
        {
            magnitudeGreaterThanFive.map((c) => (
                <div className="cartoon">
                    <p>{c.name}</p>
                    <p>{c.superpower}</p>
                    <p>{c.magnitude}</p>
                </div>
            ))
        }
        <h4> display only the names of characters whose magnitude is an even number</h4>
        {
            magnitudeEvenNumber.map((c) => (
                <div className="cartoon">
                    <h1>{c.name}</h1>
                </div>
            ))
        }
        <h4>display the details of the character having Intelligence super power.</h4>
        {
            superPowerIntelligence.map((c) => (
                <div className="cartoon">
                    <p>{c.name}</p>
                    <p>{c.superpower}</p>
                    <p>{c.magnitude}</p>
                </div>
            ))
        }
    </React.Fragment>
  )
};

export default Cartoons;
