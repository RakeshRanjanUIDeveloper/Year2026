import React, { useState } from 'react'
import './Carousel.css';
import CarouselImage from './CarouselImage';
const CarouselChild = ({images}) => {
    const [active, setActive] = useState(0);
    const handlePrev = () =>{
        setActive(preActive => (preActive === 0 ? images.length-1 : preActive-1))
    }
    const handleNext = () =>{
        setActive(preActive => (preActive === images.length-1 ? 0: preActive+1))
    }
  return (
    <React.Fragment>
        <div className='slider'>
            <div className='slides'>
                {
                    images.map((image, index) =>(
                        <CarouselImage {...image} key={image.caption} active={index === active} />
                    ))
                }
            </div>
            <div className='navigation'>
                <div className='navigation-bottom'>
                    {
                        images.map((image, index) => (
                            <div className={`dots ${index === active ? "active" : ''}`} key={image.caption} onClick={() => {
                                setActive(index);
                              }} />
                        ))
                    }
                </div>
                <div className='navigation-next-prev'>
                    <div className="next-prev prev" onClick={handlePrev}>&lt;</div>
                    <div className="next-prev next" onClick={handleNext}>&gt;</div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CarouselChild