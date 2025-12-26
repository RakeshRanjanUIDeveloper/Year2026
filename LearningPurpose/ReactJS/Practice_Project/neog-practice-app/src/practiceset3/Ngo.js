import React from 'react'

const Ngo = ({DonationData}) => {
    const totalDonation = DonationData.reduce((acc, curr) => acc + curr.Donation, 0);
  return (
    <div>Total Donation Collected: {totalDonation}
    </div>
  )
}

export default Ngo