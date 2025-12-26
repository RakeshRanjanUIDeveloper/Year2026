import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="content-area">
      {err.status} {err.statusText}
    </div>
  );
};

export default Error;
