import React from 'react'

const Donation = ({donationData}) => {
    const totalAmount = donationData.reduce((acc, curr) => acc + curr.Donation, 0);
  return (
    <div>
        <h2>Donation Amount</h2>
        <p>Total Donation Collected: {totalAmount}</p>
    </div>
  )
}

export default Donation