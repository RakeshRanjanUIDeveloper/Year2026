import React, { useState } from "react";

const Vegetables = () => {
  const vegetables = [
    {
      id: 1,
      name: "Carrots",
      pickDate: "2023-03-25",
    },
    {
      id: 2,
      name: "Broccoli",
      pickDate: "2023-03-30",
    },
    {
      id: 3,
      name: "Peppers",
      pickDate: "2023-03-25",
    },
    {
      id: 4,
      name: "Tomatoes",
      pickDate: "2023-03-27",
    },
    {
      id: 5,
      name: "Ladies Finger",
      pickDate: "2023-03-30",
    },
  ];

  const [fresh, setFresh] = useState(false);

  const handleFresh = () =>{
    setFresh(true)
  }
  const freshStyle ={
    color:'Green'
  }
  return (
    <React.Fragment>
        <div className="vegetables">
        {
            vegetables.map((v) =>(
                <div className="vegetable" style={v.pickDate==='2023-03-30' && fresh ? freshStyle : {}}>
                    <h5>{v.name}</h5>
                    <p>{v.pickDate}</p>
                </div>
            ))
        }
        </div>
        <button onClick={handleFresh}>Highlight Fresh Vegetables</button>
    </React.Fragment>
  )
};

export default Vegetables;
