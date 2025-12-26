import React from 'react'

const CustomImage = ({imageLink, caption}) => {
  return (
    <div>
        <figure>
            <img src={imageLink} alt={caption} />
            <figcaption>{caption}</figcaption>
        </figure>
    </div>
  )
}

export default CustomImage