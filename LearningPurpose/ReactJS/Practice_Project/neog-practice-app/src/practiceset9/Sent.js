import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MailContext } from './MailContext';

const Sent = () => {
  const { id } = useParams();
  const { sentEmails } = useContext(MailContext);

  if (!sentEmails || sentEmails.length === 0) {
    return <p>Loading sent emails...</p>; // Show loading state while emails are being fetched
  }

  const sentEmail = sentEmails.find((email) => email.id === parseInt(id, 10));
  console.log(sentEmail)
  if (!sentEmail) {
    return <p>Email not found!</p>; // Handle case where email ID doesn't exist
  }

  return (
    <React.Fragment>
      <h2>Sent Email Details</h2>
      <p><strong>To:</strong> {sentEmail.to}</p>
      <p><strong>Subject:</strong> {sentEmail.subject}</p>
      <p><strong>Message:</strong> {sentEmail.message}</p>
    </React.Fragment>
  );
};
export default Sent