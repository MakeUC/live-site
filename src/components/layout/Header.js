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
            <div className="w-12 md:ml-24 lg:ml-32">
              <LogoIcon />
            </div>
          </div>
        </Link>
        {page === `index` && (
          <div className="flex mt-3 sm:mt-0">
            <Link className="px-4 lg:px-10 nav-link" to="/">
              Home
            </Link>
            <Link className="px-4 lg:px-10 nav-link" to="/mentors">
              Mentors
            </Link>
            <Link className="px-4 lg:px-10 nav-link" to="/resources">
              Resources
            </Link>
            <Link className="px-4 lg:px-10 nav-link" target="_blank" to="https://makeuc-2020.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover">
              Prizes
            </Link>
            <Link className="px-4 lg:px-10 nav-link" target="_blank" to="https://join.slack.com/t/makeuc-2020/shared_invite/zt-hs1ev57m-WmnWjiwgCMy87mZDmcIS4A">
              Slack
            </Link>
          </div>
        )}
      </div>
      <a
        id="mlh-trust-badge"
        style={{
          display: `block`,
          maxWidth: `100px`,
          minWidth: `50px`,
          position: `fixed`,
          left: `25px`,
          top: 0,
          width: `10%`,
          zIndex: 10000,
        }}
        href="https://mlh.io/seasons/na-2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg"
          alt="Major League Hacking 2021 Hackathon Season"
        />
      </a>
    </header>
  );
};

export default Header;
