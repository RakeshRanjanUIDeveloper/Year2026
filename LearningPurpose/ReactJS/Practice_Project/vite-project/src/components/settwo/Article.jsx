import React, { useState } from 'react'

const Article = ({articleTitle, articleContent}) => {
    const [showContent, setShowContent] = useState(false);
    const handleContent = () =>{
        setShowContent((prev) => !prev)
    }
  return (
    <React.Fragment>
        <h1>{articleTitle}</h1>
        <button onClick={handleContent}>Know More</button>
        <h4>
        {
            showContent && articleContent  
        }
        </h4>
    </React.Fragment>
  )
}

export default Article