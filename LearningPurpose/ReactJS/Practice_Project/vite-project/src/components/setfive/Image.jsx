import React, { useEffect, useState } from 'react'
import { FakeImageFetch } from './FakeImageFetch'

const Image = (props) => {
    const {heading, height, width} = props;
    const [imageData, setImageData] = useState([])
    const fetchImageData = async () =>{
        try {
            const response = await FakeImageFetch('https://example.com/api/user');
            setImageData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchImageData();
    }, [])
  return (
    <React.Fragment>
        <h2>{heading}</h2>
        <img src={imageData.image} style={{height:height, width:width}} />
        <h2>Name - {imageData.name}</h2>
        <h3>Likes - {imageData.likes}</h3>
        <h3>Comments - {imageData.comments}</h3>
    </React.Fragment>
  )
}

export default Image