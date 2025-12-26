import React from 'react'

const Student = ({studentDetails}) => {
    const {name, english, maths, computers} = studentDetails;
    const totalMarks = english+maths+computers
    // >= 225, the grade is A, >=180 the grade is B, >=150
    /* let grade =''
    if(totalMarks >= 225){
      grade = 'A'
    }else if(totalMarks >= 180){
      grade = 'B'
    }else{
      grade = 'C'
    } */

      let grade = totalMarks >= 225 ? 'A' : totalMarks>= 180 ? 'B' : 'C'
    return (
    <React.Fragment>
        <h2>Student Details</h2>
        <p>Name - {name}</p>
        <p>English - {english}</p>
        <p>Maths - {maths}</p>
        <p>Computers - {computers}</p>
        <p>Total Marks - {totalMarks}</p>
        <p>Grade - {grade}</p>
    </React.Fragment>
  )
}

export default Student