import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns" />
        <div className="eleven columns main-col">
          <h1 className="text-center mbClass" id="orangeColor">
            About Me
          </h1>
          <p className="lead">
            <span id="whiteColor">
              I am a Web Developer intrusted in developing fast ,efficient,
              secure and scalable webapps for anyone who is interested in it. In
              the past years I was building applications with C++ and Java.
              Recently I was building applications with PHP. Now a days I code
              with JAVASCRIPT (ES6+) on both ends (Front (React JS) and Back
              (NODE JS)). I have worked with databases like SQL(MYSQL) and
              NO-SQL(Mongo DB). I have a clear understanding of how websites
              works both on the frontend and on the backend and how data gets
              send from one point to another. I have done a ton of projects. I
              am familiar with REST architecture,REST API's etc.
            </span>
          </p>
          <div className="row">
            <div className="columns download">
              <p>
                <a href="images/MY_CV.pdf" className="button" download="CV">
                  <i className="fa fa-download" id="orangeColor" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end .main-col */}
    </section>
  );
}
