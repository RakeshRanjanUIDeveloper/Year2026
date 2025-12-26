import React from "react";

const EmployeeDetails = () => {

let cardStlye={
    border:'2px solid',
    borderColor:'orangered'
}







  const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];

  let totalSalary = employees.reduce((acc,curr)=>{
    acc = acc + curr.salary;
    return acc;
  }, 0)
  return <div>
  <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            name: {employee.name}, level: {employee.level}, dept: {employee.dept}, 
            designation: {employee.designation}, salary: {employee.salary}
          </li>
        ))}
      </ul>
      <h2>Total salary expense of the company - {totalSalary}</h2>
      <h2>  employees Details of level 2</h2>
     { employees.filter((employee)=> employee.level===2).map((employee,index)=>
       <li key={index} style={{backgroundColor:"orangered"}}>    name: {employee.name}, level: {employee.level}, dept: {employee.dept}, 
       designation: {employee.designation}, salary: {employee.salary}           </li>
    )}

    <h2>  employees Details who is President</h2>
    { employees.filter((employee)=> employee.designation==="President").map((employee,index)=>
      <li key={index} style={cardStlye}>    name: {employee.name}, level: {employee.level}, dept: {employee.dept}, 
      designation: {employee.designation}, salary: {employee.salary}    </li>
   )}





  </div>;
};

export default EmployeeDetails;
