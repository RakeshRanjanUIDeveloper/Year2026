import React, { useState } from "react";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.id]: !prev[node.id],
                }))
              }
            >
              {isExpanded[node.id] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {node?.isFolder && (<span><img src="https://up.yimg.com/ib/th?id=OIP.NXPPEWa64H2c-SI6tu_7YAHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" alt="icon" className="icon" /></span> )}
        
          {isExpanded[node.id] && node.children && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
