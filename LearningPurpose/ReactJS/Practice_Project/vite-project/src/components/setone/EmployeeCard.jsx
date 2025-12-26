import React from 'react'
const EmployeeCard = ({name, designation, workExperience}) => {
    // const {name, designation, workExperience} = props;
  return (
    <React.Fragment>
       <p> {name}</p>
        <p style={{color: 'green'}}>{designation}</p>
       <p style={{color : 'blue'}}> {workExperience}</p>
    </React.Fragment>
  )
}

export default EmployeeCard