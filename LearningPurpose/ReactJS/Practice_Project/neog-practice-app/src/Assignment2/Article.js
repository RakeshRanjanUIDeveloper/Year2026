import React, { useState } from 'react'

const Article = ({title,content}) => {
    const [toggle,setToggle]=useState(false)
  const showContent=()=>{
    //  (toggle?setToggle(false):setToggle(true))

    setToggle((prevState)=>!prevState)
  }

  return (
    <div>
    <h3>{title}</h3>

    <button onClick={showContent}>Know More</button>
   {toggle&&<p>{content}</p> } 
    
    
    </div>
  )
}

export default Article