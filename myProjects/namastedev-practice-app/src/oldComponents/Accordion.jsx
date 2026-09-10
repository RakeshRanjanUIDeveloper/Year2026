import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  if (!items || items.length === 0) {
    return <p>No items available</p>
  }

  return (
    <div className="accordion-items">
      {items.map((item, index) => (
        <div
          className="each-item"
          key={index}
          onClick={() => handleClick(index)}
        >
          <h2>
            {item.title}{' '}
            {index === activeIndex ? <FaChevronUp /> : <FaChevronDown />}
          </h2>

          {index === activeIndex && (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
