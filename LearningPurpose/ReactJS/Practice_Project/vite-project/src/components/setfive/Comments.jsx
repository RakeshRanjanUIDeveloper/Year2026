import React, { useEffect, useState } from 'react'
import { FakeCommentsFetch } from './FakeCommentsFetch';

const Comments = () => {
    const [commentsData, setCommentsData] = useState([]);
    const fetchCommentsData = async () =>{
        try{
            const response = await FakeCommentsFetch('https://example.com/api/comments');
            setCommentsData(response.data.comments);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        fetchCommentsData();
    }, [])

    const handleDelete = (dName) =>{
        console.log(dName)
        setCommentsData((prevComment) => prevComment.filter((p) => p.name != dName))
    }
  return (
    <React.Fragment>
        <h2>Comments</h2>
        <div className='comments'>
        {
            commentsData.map((c) => (
                <div className='comment'>
                    <h2>{c.name}</h2>
                    <p>{c.text}</p>
                    <button onClick={() => handleDelete(c.name)}>Delete</button>
                </div>
            ))
        }
        </div>
    </React.Fragment>
  )
}

export default Comments