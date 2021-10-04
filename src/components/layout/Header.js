import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import LogoIcon from "../../svg/LogoIcon";
import Button from "../Button";

const Header = ({ page = `index` } = {}) => {
  const [state, setState] = useState(`top`);

  useEffect(() => {
    const listener = document.addEventListener(`scroll`, (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        if (state !== `scrolling`) {
          setState(`scrolling`);
        }
      } else {
        if (state !== `top`) {
          setState(`top`);
        }
      }
    });

    return () => document.removeEventListener(`scroll`, listener);
  });

  return (
    <header
      className={`sticky top-0 shadow navbar ${state}`}
      style={{
        zIndex: 10,
      }}
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between max-w-full px-8 py-2">
        <Link to="/">
          <div className="flex items-center text-2xl">
            <div className="w-14 md:ml-24 lg:ml-30">
              <LogoIcon />
            </div>
          </div>
        </Link>
        {page === `index` && (
          <div className="flex mt-3 sm:mt-0">
            {/*<Link className="px-4 lg:px-10 nav-link mt-4" to="/">
              Home
        </Link>*/}
            {/* <Link className="px-4 lg:px-10 nav-link mt-4" to="/mentors">
              Mentors
            </Link> */}
            <Link className="px-4 lg:px-10 nav-link mt-6" to="/resources">
              Resources
            </Link>
            <button><a target="_blank"
                      className="primary-button ma2 nes-btn"
                      href="https://gather.town/app/758An53btp2jKRWc/Sponsor%20Room%201">SPONSOR EXPO</a>
            </button>
          </div>
        )}
      </div>
      <a 
        id="mlh-trust-badge" 
        className="flex"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "40px", 
          position: "fixed",
          left: "15px",
          top: 0,
          width: "10%",
          zIndex: "10000"
        }}
        href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white" 
        target="_blank"
      >
        <img 
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" 
          alt="Major League Hacking 2022 Hackathon Season" 
          style={{width: "100%"}}
        />
      </a>
    </header>
  );
};

export default Header;
