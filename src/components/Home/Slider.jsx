import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import slidercss from "../../styles/home/slider.module.css"
import { GoArrowSmallRight, GoArrowSmallLeft } from "react-icons/go";
const Slider = ({ slider }) => {
  const [index, setindex] = useState(0);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    if (temp) {
      setTimeout(() => {
        index < slider.length - 1 ? setindex(index + 1) : setindex(0);
      }, 1000);
    }
  }, [index, slider, temp]);
  return (
    <div className={slidercss.container}>
      <div className={slidercss.box}>
        <GoArrowSmallLeft className={slidercss.leftIcon}
          onClick={() =>
            index > 0 ? setindex(index - 1) : setindex(slider.length - 1)
          }
        />
        <img
          src={slider[index]}
          alt=""
          onMouseOver={() => setTemp(true)}
          onMouseOut={() => setTemp(false)}
        />
        <GoArrowSmallRight className={slidercss.rightIcon}
          onClick={() =>
            index < slider.length - 1 ? setindex(index + 1) : setindex(0)
          }
        />
      </div>
    </div>
  );
};

export default Slider;
