import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { MailContext } from './MailProvider';

const MailDetails = () => {
  const { id } = useParams();
  const { mailData } = useContext(MailContext);
  const navigate = useNavigate();

  const mail = mailData.find((mail) => mail.mId === id);

  if (!mail) {
    return <p>Mail not found</p>;
  }

  return (
    <div className="mail-details">
      <h2>Subject: {mail.subject}</h2>
      <p>{mail.content}</p>
      <div className="buttons">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default MailDetails;
