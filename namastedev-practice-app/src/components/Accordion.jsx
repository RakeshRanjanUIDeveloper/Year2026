import { useState } from "react";

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];
const Accordion = () => {
    const [active, setActive] = useState(null);
   const handleAccordion = (title) => {
    setActive((prev) => (prev === title ? null : title));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.title}>
          <h3 onClick={() => handleAccordion(item.title)}>{item.title}
            <span>{active === item.title ? "-" : "+"}</span>
          </h3>
          {
            active === item.title && <p>{item.content}</p> 
          }
          
        </div>
      ))}
    </div>
  );
};
export default Accordion;
