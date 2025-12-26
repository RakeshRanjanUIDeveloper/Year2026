import React, { useEffect, useState } from 'react'
import { fakeAddressFetch } from './fakeAddressFetch';

const Address = () => {
    const [addressData, setAddressData] = useState({});
    const [address, setAddress] = useState(false);

    const fetchAddressData = async () =>{
        try{
            const response = await fakeAddressFetch('https://example.com/api/user');
            setAddressData(response.data);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchAddressData();
    })
    const handleAddress = () =>{
        setAddress((prev) => !prev)
    }
  return (
    <React.Fragment>
        <h2>Address</h2>
        <p><b>Name</b> {addressData.name}</p>
        <p><b>Email</b> {addressData.email}</p>
        <p><b>Phone</b> {addressData.phone}</p>
        <button onClick={handleAddress}>{address ? 'Hide' : 'Shows'} Address</button>
        {
            address &&
            <div className='adddress'>
                <p><b>street</b>{addressData.address.street}</p>
                <p><b>suite</b>{addressData.address.suite}</p>
                <p><b>city</b>{addressData.address.city}</p>
                <p><b>zipcode</b>{addressData.address.zipcode}</p>
            </div>
        }
        
    </React.Fragment>
  )
}

export default Address