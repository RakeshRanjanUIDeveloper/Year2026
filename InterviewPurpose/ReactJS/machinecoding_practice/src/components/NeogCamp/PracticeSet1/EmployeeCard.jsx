import React from 'react'

const EmployeeCard = ({name, designation, workExperience}) => {
  return (
    <React.Fragment>
        <h2>{name}</h2>
        <h2><span style={{ color: 'green' }}>Designation:</span> {designation}</h2>
        <h2><span style={{ color: 'blue' }}>Experience:</span> {workExperience}</h2>
    </React.Fragment>
  )
}

export default EmployeeCard