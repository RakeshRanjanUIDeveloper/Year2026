import React, { useEffect, useState } from 'react'
import { FakeChatFetch } from './fakeChatFetch';

const Chat = () => {
    const [chatData, setChatData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchChatData = async () =>{
        try{
            const response = await FakeChatFetch('https://example.com/api/userchat');
            setChatData(response.data);
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchChatData();
    }, [])
  return (
    <React.Fragment>
        {
            loading ? (<p>Loading Chats......</p>) : (
                <ul>
                    {
                        chatData.map((c) => (
                            <li><b>{c.name} Chat's</b>
                                <ul>
                                    {
                                        c.messages.map((m) => (
                                            <li><b>{m.from}</b> : {m.message}</li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </React.Fragment>
  )
}

export default Chat