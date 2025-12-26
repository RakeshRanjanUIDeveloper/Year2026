import React, { useContext } from "react";
import "./Address.css";
import { Context } from "./AddressParent";
const AddressChild = () => {
  const address = useContext(Context)
  return (
    <ul>
      {address.map((user) => (
        <li>{user.city}</li>
      ))}
    </ul>
  );
};

export default AddressChild;
