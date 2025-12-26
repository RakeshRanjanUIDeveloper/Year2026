import React from "react";

const Employee = () => {
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
  const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
  return (
    <div>
        <h2>Employee Records</h2>
        <ul>
            {
                employees.map((employee) => <li>Name {employee.name} - <span style={{backgroundColor : employee.level >2 ? 'Orange' : ''}}>Level {employee.level}</span> - Dept {employee.dept} - <span style={{border: employee.designation==='President' ? '3px solid black' : ''}}>Designation {employee.designation}</span> - Salary {employee.salary}</li>)
            }
        </ul>
        <h3>Total Salary Expense: {totalSalary}</h3>
    </div>
  )
};

export default Employee;
