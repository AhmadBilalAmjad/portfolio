import React from "react";

export default function Header() {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Education
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        {/* end #nav */}
      </nav>
      {/* end #nav-wrap */}
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Ahmad Bilal Amjad</h1>
          <h3>
            <span id="textBolder">
              I'm a Web Developer creating fast and effective websites of all
              sizes. Let's start{" "}
              <a className="smoothscroll" href="#about" id="orangeColor">
                SCROLLING
              </a>{" "}
              and learn more about me.
            </span>
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://github.com/AhmadBilalAmjad" target="blank">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ahmad-bilal-amjad-50a55418a"
                target="blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
}
