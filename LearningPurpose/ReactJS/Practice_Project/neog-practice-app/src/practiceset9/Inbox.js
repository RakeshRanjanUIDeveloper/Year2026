import React, { useContext } from 'react'
import { MailContext } from './MailContext'
import { Link } from 'react-router-dom';

const Inbox = () => {
  const {allInboxMails, markReadEmails} = useContext(MailContext);
  console.log(allInboxMails)

  const {readCount, unreadCount} = allInboxMails.reduce((acc, mail) =>{
      if(mail.read){
        acc.readCount = acc.readCount +1
      }else{
        acc.unreadCount = acc.unreadCount +1
      }
      return acc;
  }, {readCount:0 , unreadCount: 0})
  return (
    <React.Fragment>
        <h2>Inbox Page</h2>
        <h3>Unread Emails - {readCount}</h3>
        <h3>Read Emails - {unreadCount}</h3>
        <ul>
            {
              allInboxMails.map((mail) => (
                <div className='mail'>
                    <Link to={`/sent/${mail.id}`}><li key={mail.id}>{mail.subject}</li></Link>
                    {!mail.read && ( <button onClick={() => markReadEmails(mail.id)}>Mark as Read</button> )}
                </div>
              ))
            }
        </ul>
    </React.Fragment>
  )
}

export default Inbox