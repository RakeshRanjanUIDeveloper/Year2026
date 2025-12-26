import React, { useContext } from "react";
import { MailContext } from "./MailProvider";
const Trash = () => {
  const { trashData } = useContext(MailContext); 
  return (
    <div className="trash-container">
      <h2>Trash</h2>
      {trashData.length === 0 ? (
        <p>No mails in Trash</p>
      ) : (
        trashData.map((mail) => (
          <div className="mail" key={mail.mId}>
            <h2>Subject: {mail.subject}</h2>
            <p>{mail.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Trash;
