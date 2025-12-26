import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="content-area">
        <p>Contact Page</p>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Go to Cart
        </button>
      </div>
    </React.Fragment>
  );
};

export default Contact;
