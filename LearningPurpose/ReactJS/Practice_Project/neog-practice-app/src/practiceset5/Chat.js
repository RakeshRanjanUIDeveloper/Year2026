import React, { useEffect, useState } from 'react'
import { fakeChatFetch } from './fakeChatFetch'

const Chat = () => {
    const [chatData, setChatData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const fetchChatData = async () =>{
            try {
                const delay = (ms) => {
                    return new Promise((resolve) => setTimeout(resolve, ms))
                }
                await delay(5000);
                const response = await fakeChatFetch('https://example.com/api/userchat');
                if(response.status === 200){
                    setChatData(response.data)
                }
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        fetchChatData();
    },[])
  return (
    <React.Fragment>
        {
            loading && <p>Loading Chats…...</p>
        }
        <ul>
            {
                chatData.map((data) =>(
                    <li><b>{data.name} Chat</b>
                        <ul>
                            {data.messages.map((message) =>(
                                <li><b>{message.from}</b> : {message.message}</li>
                            ))}
                            
                        </ul>
                    </li>
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default Chat