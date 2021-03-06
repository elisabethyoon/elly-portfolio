import React, { Component } from "react";
import data from "../data/portfolioData";

function AppHeader({ handleScrollMove }) {
  const onClickHeader = (type) => {
    handleScrollMove(type);
  };

  const { name, position } = data.profile;
  const { mail, github } = data.contact;
  return (
    <div>
      <header className="header-contents">
        <div className="wrap-header">
          <ul>
            <li className="gnb-menu" onClick={() => onClickHeader("aboutRef")}>
              ABOUT
            </li>
            <li
              className="gnb-menu"
              onClick={() => onClickHeader("portFolioRef")}
            >
              PORTFOLIO
            </li>
            <li
              className="gnb-menu"
              onClick={() => onClickHeader("contactRef")}
            >
              CONTACT
            </li>
          </ul>
        </div>
      </header>
      <div className="inner-contents">
        <div className="bg-contents">
          <div className="bg-inner"></div>
          <div className="title-portfolio">
            <p className="text-main">PORTFOLIO</p>
            <p className="text-main text-name">Front-end Developer</p>
          </div>
          <div className="title-job">
            <p className="text-main text-job">YOON ELISABETH</p>
          </div>
        </div>
        <div className="profile-contents">
          <div className="user-image"></div>
          <div className="user-info">
            <h1 className="user-name">{name}</h1>
            <h3 className="user-position">{position}</h3>
          </div>
          <div className="info-wrapper">
            <dl className="info-list">
              <dt>Github -</dt>
              <dd className="profile-url">
                <a
                  href="https://github.com/elisabethyoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {github}
                </a>
              </dd>
            </dl>
            <p className="info-text">* 본 페이지는 React로 제작되었습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
