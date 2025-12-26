import React, { createContext, useEffect, useState } from "react";
import AddressChild from "./AddressChild";
export const Context = createContext();

const AddressParent = () => {
    const [counter, setCounter] = useState(0);
    const [address, setAddress] = useState([]);



    const handleCouner = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://random-data-api.com/api/address/random_address?size=${counter}`
        );
        const data = await res.json();
        console.log(data);
        setAddress(data)
      } catch (error) {
        console.log(error);
      }
    };
    if (counter > 0) fetchData();
  }, [counter]);
  return (
    <React.Fragment>
        <Context.Provider value={address}>
            <h1>Count - {counter}</h1>
            <button onClick={handleCouner}>click</button>
            <AddressChild />
        </Context.Provider>
    </React.Fragment>
  );
};

export default AddressParent;
