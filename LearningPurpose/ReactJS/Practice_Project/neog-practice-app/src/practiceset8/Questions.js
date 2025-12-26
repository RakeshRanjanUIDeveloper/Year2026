import React, { useContext } from 'react'
import { ExamContext } from './ExamContext'
import { Link } from 'react-router-dom';

const Questions = () => {
    const {allExams} = useContext(ExamContext) ;

  return (
    <div className='exams-questions'>
            {
                allExams.map((ques) => (
                    <div className='exam-question'>
                        <p key={ques.id}>{ques.question}</p>
                        <Link to=''>upvote</Link>
                        <Link to=''>downvote</Link>
                        <Link to={`/answer/${ques.id}`}>answers</Link>
                    </div>
                ))
            }
    </div>
  )
}

export default Questions