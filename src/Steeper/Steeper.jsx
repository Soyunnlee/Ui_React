import React from "react";

import "../Css/About.css";
import "../Css/Grid.css";

import classnames from "classnames";
import Jump from "react-reveal/Jump";
import { BiBuildingHouse } from "react-icons/bi";


import { About, WebSite } from "../assets/temp.js";
import { Card, Label } from "flowbite-react";


// experience & service reflection
function FullPage1(props) {
  const [selectedNum, setSeletedNum] = React.useState(0);

  function selectStepper(num) {
    setSeletedNum(num);
  }

  return (
    <div className="AboutWrap" id="3">
      <div className="Container">
          {/* Title */}
          <div class="WebTitleWrapRow">
            <div className="Title mb-5">ABOUT</div>
          </div>

          <ul className="StepperWrap">
            {About.map(Title => (
              <li 
              onClick={() => { selectStepper(Title.id);}}
              className={classnames("stepper-step", {
                "stepper-active ": selectedNum === Title.id,
              })}>
                {/* Stepper Title */}
              <div className="stepper-head mb-5">
                <BiBuildingHouse className="StepperIcon"/>
                <div className="StepperTitle">
                  <p >{Title.label} </p>
                  <span> {Title.date}</span>
                </div>
              </div>
                {/* Mobile Content */}
              <div
                className={classnames("stepper-content relative", {
                  block: selectedNum === Title.id,
                  hidden: selectedNum !== Title.id,
                })}
              >
                <div className="MobileContent">
                  <div> 
                    <p> {Title.label} </p>
                    {Title.description}
                  </div>
                </div>
              </div>

              </li>
            ))}
          </ul>

          {/* Content */}
          <div className="ContentWrap">
            {/* cards */}
            {About.map(Title => (
              <Jump>
                <div className={classnames( "Content", { block: selectedNum === Title.id, hidden: selectedNum !== Title.id })}>
                  <p>{Title.label}</p>
                  <span>{Title.description}</span>
                </div>
              </Jump>
            ))}
          </div>

      </div>
    </div>
  );
}

export default FullPage1;
