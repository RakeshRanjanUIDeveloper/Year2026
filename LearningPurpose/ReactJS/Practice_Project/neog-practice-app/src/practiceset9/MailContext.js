import React, { createContext, useEffect, useState } from 'react'
import { fakeEmailFetch } from './fakeEmailFetch';

// Create the Context
export const MailContext = createContext();

// Create Provider Component
export const MailProvider = ({children}) =>{
    const [allInboxMails, setAllInboxMails] = useState([]);
    const [allSentMails, setAllSentMails] = useState([]);
    const markReadEmails = (emailId) =>{
        setAllInboxMails((prevEmail) =>
            prevEmail.map((mail) => mail.id === emailId ? {...mail, read:true} : mail)
        )
    }
    useEffect(() =>{
        const fetchEmailData = async () =>{
            try {
                const response = await fakeEmailFetch('https://example.com/api/allemails');
                if(response.status === 200){
                    setAllInboxMails(response.data.emails)
                    setAllSentMails(response.data.sentEmails)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchEmailData();
    }, [])
    return (
        <MailContext.Provider value={{allInboxMails, markReadEmails, sentEmails: allSentMails}}>
            {children}
        </MailContext.Provider>
    )
}
