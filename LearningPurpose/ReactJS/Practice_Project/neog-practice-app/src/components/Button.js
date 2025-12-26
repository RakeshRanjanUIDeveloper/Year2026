import React from 'react'
import StationeryList from './StationeryList';

const Button = ({mybtnStyle, text}) => {
    const items = ['pen', 'pencil', 'ruler', 'eraser'];
    const header ="Stationery Items";
  return (
    <React.Fragment>
        <div style={mybtnStyle}>{text}</div>
        <StationeryList items={items} header={header} />
    </React.Fragment>
  )
}

export default Button