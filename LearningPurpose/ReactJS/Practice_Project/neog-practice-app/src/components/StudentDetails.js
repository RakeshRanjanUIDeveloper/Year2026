import React from 'react'

const StudentDetails = ({student}) => {
   
    const totalMarks = student.english+student.maths+student.computers;
    let grade;
    if(totalMarks >=225){
        grade = 'A'
    }else if(totalMarks >= 180){
        grade = 'B'
    }else if(totalMarks >= 150){
        grade = 'C'
    }else{
        grade = 'D'
    }
  return (
    <React.Fragment>
        <div>Student Details</div>
        <h2>Name - {student.name}</h2>
        <h2>English - {student.english}</h2>
        <h2>Maths - {student.maths}</h2>
        <h2>Computers - {student.computers}</h2>
        <h1>Total marks - {totalMarks}</h1>
        <h1>Grade - {grade}</h1>
    </React.Fragment>
  )
}

export default StudentDetails