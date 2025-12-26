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

  const totalSalary = employees.reduce((acc, curr)=> acc+curr.salary, 0)
  const level2Employee = employees.filter((e) => e.level===2); 
  const presidentEmployee = employees.filter((p) => p.designation=== 'President');
  return (
    <React.Fragment>
        {
            employees.map((e)=> (
                <p key={e.name}>name: {e.name}, level: {e.level}, dept: {e.dept}, designation: {e.designation}, salary: {e.salary}</p>
            ))
        }
        <p> Total Salary Expense: <b>{totalSalary}</b></p>
        <h2>Level 2 Employee</h2>
        <ul>
        {
            level2Employee.map((l) => (
                <li key={l.name}>Name: -{l.name}, Dept: -{l.dept}, Designation: -{l.designation}</li>
            ))
        }
        </ul>
        <h2>President Employee</h2>
        <ul>
        {
            presidentEmployee.map((p) => (
                <li key={p.name}>Name: {p.name} Designation: {p.designation}</li>
            ))
        }
        </ul>
    </React.Fragment>
  );
};

export default Employee;
