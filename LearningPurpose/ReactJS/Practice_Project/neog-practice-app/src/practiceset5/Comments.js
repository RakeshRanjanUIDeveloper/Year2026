import React, { useEffect, useState } from 'react'
import { fakeCommentFetch } from './fakeCommentFetch'

const Comments = () => {
    const [commentsData, setCommentsData] = useState([])
    useEffect(() =>{
        const fetchCommentsData = async () =>{
            try {
                const response = await fakeCommentFetch('https://example.com/api/comments');
                if(response.status === 200){
                    setCommentsData(response.data.comments)
                }
            } catch (error) {
                
            }
        }
        fetchCommentsData();
    }, []);

    const handleDelete = (id) => {
        const updatedComments = commentsData.filter((comment) => comment.id !== id);
        setCommentsData(updatedComments);
      };
  return (
    <React.Fragment>
        <h2>Comments</h2>
        <ul>
            {
                commentsData.map((comment) =>(
                    <div key={comment.id}><h2>{comment.name}</h2><h4>{comment.text}</h4> <button onClick={() => handleDelete(comment.id)}>Delete</button></div>
                ))
            }
        </ul>
    </React.Fragment>
  )
}

export default Comments