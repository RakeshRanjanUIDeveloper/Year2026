import React, { useState } from 'react'
import Child1 from './Child1';
const Parent1 = () => {
    const [userData, setUserData] = useState(null);

    const handleChildData = (data) =>{
        setUserData(data)
    }
  return (
    <div>
        {
            userData && <p>User: {userData.name}, Age: {userData.age}</p>
        }

        <Child1 sendDataToParent={handleChildData} />
    </div>
  )
}

export default Parent1