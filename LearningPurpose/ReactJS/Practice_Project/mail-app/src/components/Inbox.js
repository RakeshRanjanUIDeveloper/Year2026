import React, { useContext, useState } from 'react';
import { MailContext } from './MailProvider';
import { useNavigate } from 'react-router';

const Inbox = () => {
  const { mailData, setMailData, setTrashData, setSpamData } = useContext(MailContext);
  const unreadCount = mailData ? mailData.filter((mail) => mail.unread).length : 0;
  const [showUnread, setShowUnread] = useState(false);
  const [showStarred, setShowStarred] = useState(false);
  const navigate = useNavigate();
  const filteredMails = mailData.filter((mail) => {
    if (showUnread && showStarred) return mail.unread && mail.isStarred;
    if (showUnread) return mail.unread;
    if (showStarred) return mail.isStarred;
    return true;
  });

  const handleUnreadMails = (e) => {
    setShowUnread(e.target.checked);
  };

  const handleStarredMails = (e) => {
    setShowStarred(e.target.checked);
  };

  const toggleStar = (id) =>{
    const updatedStar = mailData.map((mail) =>{
        if(mail.mId === id){
          return {...mail, isStarred:!mail.isStarred}
        }
        return mail
    })
    setMailData(updatedStar)
  }

  const handleDelete = (id) => {
    // Move the email to Trash
    const emailToTrash = mailData.find((mail) => mail.mId === id);
    setTrashData((prevTrash) => [...prevTrash, emailToTrash]);

    // Remove the email from Inbox
    const updatedMails = mailData.filter((mail) => mail.mId !== id);
    setMailData(updatedMails);
  };

  const markAsRead = (id) => {
    const updatedMails = mailData.map((mail) => {
      if (mail.mId === id) {
        return { ...mail, unread: false }; // Mark as read
      }
      return mail;
    });
    setMailData(updatedMails);
  };

  const reportSpam = (id) => {
    const spamMail = mailData.find((mail) => mail.mId === id);
    setSpamData((prevSpam) => [...prevSpam, spamMail]);
    setMailData(mailData.filter((mail) => mail.mId !== id));
  };

  return (
    <React.Fragment>
      <div className="checkbox-filter">
        <h2>Filter</h2>
        <input type="checkbox" checked={showUnread} onChange={handleUnreadMails} />
        <label>Show Unread mails</label>
        <input type="checkbox" checked={showStarred} onChange={handleStarredMails} />
        <label>Show Starred mails</label>
      </div>

      <h2>Unread: {unreadCount}</h2>
      <div className="mail-container">
        {filteredMails.map((mail) => (
          <div className="mail" key={mail.mId}>
            <h2>Subject: {mail.subject}</h2>
            <p>{mail.content}</p>

            <div className="mail-buttons">
              <button onClick={() => navigate(`/mail/${mail.mId}`)}>View Details</button>
              <button onClick={() => toggleStar(mail.mId)}>{mail.isStarred ? 'Star' : 'unStar'}</button>
              <button onClick={() => handleDelete(mail.mId)}>Delete</button>
              <button onClick={() => markAsRead(mail.mId)}>{mail.unread ? 'Unread' : 'Read'}</button>
              <button onClick={() => reportSpam(mail.mId)}>Report Spam</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Inbox;
