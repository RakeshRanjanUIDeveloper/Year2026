import React from 'react'

const CertificationStatus = ({studentData}) => {
    const totalMarks = studentData.reduce((acc, student) => acc + student.marks, 0);
    const meanMarks = totalMarks / studentData.length;

  return (
    <div>
    <h2>Mean Marks: {meanMarks.toFixed(2)}</h2>
    <h3>
      {meanMarks >= 80 ? 'Certification Approved' : 'Certification Not Approved'}
    </h3>
    </div>
  )
}

export default CertificationStatus