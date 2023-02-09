import React from "react";
import { WebSite } from "../assets/temp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Grid.css";
import "../Css/WebSite.css"

import { SlideContainer } from "../ui/SlideContainer";

function webSite(props) {


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

export default webSite;

