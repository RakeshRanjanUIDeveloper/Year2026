import React, { useState } from "react";
// import "./Slider.css";
import Slide from "./Slide";

const Slider = ({ images }) => {
  const [active, setActive] = useState(0);
  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
      console.log(active)
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };
  return (
    <React.Fragment>
      <div className="slider">
        <div className="slides">
          {images.map((image, i) => (
            <Slide key={image.caption} {...image} show={i === active} />
          ))}
        </div>
        <div className="navigation">
          <div className="navigation-bottom">
            {images.map((e, i) => (
              <img
                className={`preview ${i === active ? "show" : ""}`}
                key={e.caption}
                onClick={() => setActive(i)}
                src={e.image_url}
                alt={e.caption}
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
          </div>
          <div className="navigation-next-prev" onClick={onPrev}>
            {" "}
            &lt;{" "}
          </div>
          <div className="next-prev next" onClick={onNext}>
            {" "}
            &gt;{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
