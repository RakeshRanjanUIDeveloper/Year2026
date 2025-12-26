import React from "react";

const Students = () => {
  const studentData = [
    { id: 1, name: "Nitin", marks: 78 },
    { id: 2, name: "Mehak", marks: 95 },
    { id: 3, name: "Mehul", marks: 65 },
    { id: 4, name: "Nina", marks: 56 },
  ];

  // Calculate the mean of student marks
  const totalMarks = studentData.reduce((acc, student) => acc + student.marks, 0);
  const meanMarks = totalMarks / studentData.length;

  return (
    <div>
      <h2>Institute Certification Status</h2>
      <p>Mean Marks: <strong>{meanMarks.toFixed(2)}</strong></p>
      {meanMarks >= 80 ? (
        <h3 style={{ color: "green" }}>✅ Certification Approved</h3>
      ) : (
        <h3 style={{ color: "red" }}>❌ Certification Not Approved</h3>
      )}
    </div>
  );
};

export default Students;
