import React, { useState } from "react";

const Vegetables = () => {
    const [heighlight, setHighlight] = useState(false);
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

  const handleHeighlight = () =>{
        setHighlight(true)
  }
  return <div>
    <h2>Vegetables</h2>
    <ul>
        {
            vegetables.map((v) => <li style={{color : heighlight && v.pickDate === '2023-03-30' ? 'green' : '' }}>{v.name} - {v.pickDate}</li>)
        }
    </ul>
    <button onClick={handleHeighlight}>Highlight Fresh Vegetables</button>
  </div>;
};

export default Vegetables;
