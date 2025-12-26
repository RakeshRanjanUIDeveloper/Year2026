import React, { useState } from 'react';

const ColorPicker = () => {
  const colors = [
    { name: 'Red', hex: '#EE4B2B' },
    { name: 'Blue', hex: '#89CFF0' },
    { name: 'Green', hex: '#7FFFD4' },
  ];
 const [colorVisible,setColorVisible]=useState({})

 const showCode=(color)=>{ 
    console.log(colorVisible);
        
    setColorVisible(()=>({
       
           ...colorVisible,
           [color.name]:colorVisible[color.name]?null:color.hex}
    )
 
    )

 }
 
 
  return (
    <div>
    {colors.map((color)=>
        <div>
    <button style={{backgroundColor:color.hex}} onClick={()=>showCode(color)}>{color.name}</button>
    <div>{colorVisible[color.name]}</div>
    
    </div>
    
    )}

    
    
    
    
    
    
    </div>
  );
};

export default ColorPicker;
