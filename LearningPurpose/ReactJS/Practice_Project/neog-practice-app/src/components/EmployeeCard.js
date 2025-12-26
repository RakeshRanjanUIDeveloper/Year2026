import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const EmployeeCard = ({ name, designation, experience }) => {
  console.log(name, designation, experience);
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "1200px",
    margin: "16px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };
  const nameStyle = {
    fontSize: "1.5em",
    marginBottom: "8px",
  };

  const designationStyle = {
    color: "green",
    marginBottom: "4px",
  };

  const experienceStyle = {
    color: "blue",
  };

  const btnStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px",
  };
  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={designationStyle}>{designation}</div>
      <div style={experienceStyle}>{experience}</div>
      <Button mybtnStyle={btnStyle} text="Start" />
    </div>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
};
export default EmployeeCard;
