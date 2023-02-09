import React from "react";
import "../Css/Header.css";
import { Link } from "react-scroll";
import classNames from "classnames";

const menu = ["Home", "WebSite", "Experince","About", "Service", "Contact"];

function Header(props) {

  const [activeNum, setActiveNum] = React.useState(0);
  const activeMenu = (to) => {
    setActiveNum(to);
  };

  return (
    <div className="HeaderWrap ">
      <nav className="NavWrap ">
        <div className="NavPosition">

          <div className="Logo">
            <svg class="fill-slate-600"> <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z" /></svg>
            <svg class="fill-slate-500"> <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z" /></svg>
            <svg class="fill-slate-400"> <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z" /></svg>
          </div>

          {/* Pc MenuList */}
          <div className="NavListWrap">
            <ul className="NavList">
              {menu.map((menu, index) => (
                <li
                  className={classNames("NavItm", {
                    ActiveMenu: index == activeNum,
                  })}
                  style={{ transition: "all 0.3s" }}
                >
                  <Link
                  key={index} to={index} spy smooth
                  onSetActive={activeMenu}
                  className={"flex items-center"}
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="MobileMenu hidden max-md:block">
            <button
              class="NavBtn"
              itespace-nowrap
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <ul
              class="dropdown-menu MobileListWrap"
              aria-labelledby="dropdownMenuButton1"
            >
              <li class="dropdown-item MobileListItm">
                <Link to="0" spy smooth>Home</Link>
              </li>
              <li class="dropdown-item MobileListItm">  
                <Link to="1" spy smooth>WebSite</Link>
              </li>
              <li class="dropdown-item MobileListItm">
                <Link to="2" spy smooth>Experince</Link>
              </li>
              <li class="dropdown-item MobileListItm">
                <Link to="3" spy smooth>About</Link>
              </li>
              <li class="dropdown-item MobileListItm">
                <Link to="4" spy smooth>Service</Link>
              </li>
              <li class="dropdown-item MobileListItm">
                <Link to="5" spy smooth>Contact</Link>              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
