import React, { useContext } from "react";
import { MailContext } from "./MailProvider";

const Spam = () => {
  const { spamData } = useContext(MailContext); 

  return (
    <div className="trash-container">
      <h2>Spam</h2>
      {spamData.length === 0 ? (
        <p>No mails in Spam</p>
      ) : (
        spamData.map((mail) => (
          <div className="mail" key={mail.mId}>
            <h2>Subject: {mail.subject}</h2>
            <p>{mail.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Spam;
