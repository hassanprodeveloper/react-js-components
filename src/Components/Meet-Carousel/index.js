import React from "react";
import "./style.css";
import svg from "./icons/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg";
import leftIcon from "./icons/left.svg";
import rightIcon from "./icons/right.svg";

export default (props) => {
  const { size } = props;
  return (
    <div className="slider-main-cont">
      <div className="slider-row-1">
        <span className="slider-toggle-icon slider-toggle-icon-left">
          <img src={leftIcon} alt="left" />
        </span>
        <span style={{ width: size, height: size }} className="slider-body">
          <img src={svg} alt="demo svg" />
        </span>
        <span className="slider-toggle-icon slider-toggle-icon-right">
          <img src={rightIcon} alt="right" />
        </span>
      </div>
      {/* row 2 heading and description */}
      <div style={{ width: size }} className="slider-row-2">
        Your meeting is safe
      </div>
      {/* row 3 dots */}
      <div style={{ width: size }} className="slider-row-2"></div>
    </div>
  );
};
