import React, {useState} from "react";

const MyGadgets = ({ mygadgets }) => {

    const [highlightExpensive, setHighlightExpensive] = useState(false);

    const gadgetStyle ={
        backgroundColor : 'lightgreen'
    }

    const handleHighlight = () =>{
        setHighlightExpensive(true)
    }
  return (
    <React.Fragment>
      <ol>{mygadgets.map((mygadget) => (
            <li key={mygadget.id} style={highlightExpensive && mygadget.price > 50000 ? gadgetStyle : {} }>{mygadget.name} - {mygadget.description} - {mygadget.price}</li>
      ))}</ol>

      <button onClick={handleHighlight}>Highlight Expensive Gadget</button>
    </React.Fragment>
  );
};

export default MyGadgets;
