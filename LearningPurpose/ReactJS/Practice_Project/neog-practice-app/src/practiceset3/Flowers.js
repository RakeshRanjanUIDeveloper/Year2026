import React from 'react'

const Flowers = ({flowers}) => {
  return (
    <div>
    <ol>
    {
      flowers.filter((flower) => flower.price > 2000)
        .map((bouquetItem) => (
            bouquetItem.flowers.map((flower) => <li key={flower.id}>{flower}</li>)
        ))
    }
  </ol>
    </div>
  )
}

export default Flowers