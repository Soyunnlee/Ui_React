// 1.
// Website.jsx 파일이였음
import React from "react";

//자식 component
import { SlideContainer } from "../ui/SlideContainer";

// js파일 부모에게 지정 -> 자식에게 넘겨준다.
import { WebSite } from "../assets/temp";

// css 파일 있어야함.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/WebSite.css"

function SlideComponent(props) {
  return (
    <div id="1" className="WebSiteWrap">
      <div className="Container">

          <div class="WebTitleWrapRow"> 
            <div className="Title">
                WEB SITE
            </div>
          </div> 

          <div >
            <SlideContainer WebSite={WebSite} />
          </div>

      </div>
    </div>
  );
}

export default SlideComponent;

