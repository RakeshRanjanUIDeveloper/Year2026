import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return() =>{
        window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h2>Back To Top</h2>
      {
        Array(300).fill(null).map((_,index) => <p key={index}>Hello I am the paragraph</p>)
      }
      {
        visible && (<button onClick={scrollToTop}>Back to Top</button>)
      }
    </div>
  );
};
export default BackToTop;
