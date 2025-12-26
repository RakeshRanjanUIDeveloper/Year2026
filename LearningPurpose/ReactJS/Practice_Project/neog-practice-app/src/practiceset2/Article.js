import React, { useState } from 'react'

const Article = ({title,content}) => {
    const [show, setShow] = useState(false);
    const handleContent = () =>{
        setShow(true)
    }
  return (
    <React.Fragment>
        <h1>{title}</h1>
        {show && <p>{content}</p>}
        <button onClick={handleContent}>Know More</button>
    </React.Fragment>
  )
}

export default Article