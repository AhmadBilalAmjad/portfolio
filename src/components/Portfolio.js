import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 id="sizeIncrease">
            <span id="textBolder">Check Out Some of My Work.</span>
          </h1>
          {/* portfolio-wrapper */}
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {/* Start E-Commerce Site */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title>
                  <img alt="" src="images/portfolio/KeyToSuccess.png" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>E-Commerce Books Selling Site</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* End E-commerce Site */}

            {/* Start Photography Site */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-02" title>
                  <img alt="" src="images/portfolio/Photography.png" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Photography Site</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* End Photography Site */}

            {/* Start Parallax Langing Page */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-04" title>
                  <img
                    alt=""
                    src="images/portfolio/OnePageTheme.png"
                    id="imageBalance"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>One Page Theme Site</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* End Parallax Langing Page */}

            {/* Start Grid Landing Page */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-03" title>
                  <img
                    alt=""
                    src="images/portfolio/GridSite.png"
                    id="imageBalance"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Grid Site</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* End Grid Landing Page  */}
          </div>
          {/* portfolio-wrapper end */}
        </div>
        {/* twelve columns end */}

        {/* Modal Popup
                --------------------------------------------------------------- */}
        <div id="modal-01" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/M-KeyToSuccess.png"
            alt=""
          />
          <div className="description-box">
            <h4>E-Commerce Books Selling Site</h4>
            <p>
              <span id="textBolder">
                This is Book Selling Site Made up wtih
                PHP,Laravel,MySql,JQuery,HTML5,CSS3,BOOTSTRAP4*.
              </span>
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              <span id="textBolder"> Web Development </span>
            </span>
          </div>
          <div className="link-box">
            <a href="#">
              <i className="fa fa-github" /> Details
            </a>
            <a className="popup-modal-dismiss" href>
              Close
            </a>
          </div>
        </div>
        {/* modal-01 End */}

        {/* Modal Popup
                --------------------------------------------------------------- */}
        <div id="modal-02" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/M-Photography.png"
            alt=""
          />
          <div className="description-box">
            <h4>Photography Site</h4>
            <p>
              <span id="textBolder">
                This Photography Site is made up with HTML5,CSS3,Jquery and it
                is totally responsive.
              </span>
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              <span id="textBolder"> Web Development </span>
            </span>
          </div>
          <div className="link-box">
            <a href="#">
              <i className="fa fa-github" /> Details
            </a>
            <a className="popup-modal-dismiss" href>
              Close
            </a>
          </div>
        </div>
        {/* modal-02 End */}

        {/* Modal Popup
                --------------------------------------------------------------- */}
        <div id="modal-03" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/M-GridSite.png"
            alt=""
          />
          <div className="description-box">
            <h4>CSS3 Grid Site</h4>
            <p>
              <span id="textBolder">
                This is a one page site totally made up with HTML5,CSS3 Grid
                System and it is totally responsive.
              </span>
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              <span id="textBolder"> Web Development </span>
            </span>
          </div>
          <div className="link-box">
            <a href="#">
              <i className="fa fa-github" /> Details
            </a>
            <a className="popup-modal-dismiss" href>
              Close
            </a>
          </div>
        </div>
        {/* modal-03 End */}

        {/* Modal Popup
                --------------------------------------------------------------- */}
        <div id="modal-04" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/M-OnePageTheme.png"
            alt=""
          />
          <div className="description-box">
            <h4>One Page Theme Site</h4>
            <p>
              <span id="textBolder">
                This is a One Page Theme for a social type app made with
                HTML5,CSS3,BOOTSTRAP4* and its totally responsive.
              </span>
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              <span id="textBolder"> Web Development </span>
            </span>
          </div>
          <div className="link-box">
            <a href="#">
              <i className="fa fa-github" /> Details
            </a>
            <a className="popup-modal-dismiss" href>
              Close
            </a>
          </div>
        </div>
        {/* modal-04 End */}
      </div>
      {/* row End */}
    </section>
  );
}
