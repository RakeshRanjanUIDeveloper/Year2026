import React from 'react'

const Phones = ({phones}) => {

  return (
    <div>
        <h3>Phones Lists</h3>
        <ul>
            {
                phones.filter((phone) => phone.name === 'mobile').map((phone) => <li>{phone.name} - {phone.description} - {phone.price}</li>)
            }
        </ul>
    </div>
  )
}

export default Phones