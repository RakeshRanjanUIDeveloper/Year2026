import React from 'react'

const Ngo = ({donationData}) => {
    const totalAmount = donationData.reduce((acc, curr) => acc+curr.Donation, 0)
  return (
    <div>Total Donation Collected: <b>{totalAmount}</b></div>
  )
}

export default Ngo