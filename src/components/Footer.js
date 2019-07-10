import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
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
          <ul className="copyright">
            <li>
              <b style={{ color: "white !important" }}>© Copyright {year}</b>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
