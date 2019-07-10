import React from "react";

export default function Resume() {
  return (
    <section id="resume">
      {/* Education
----------------------------------------------- */}
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <p className="info lead">
                Bachelor of Science in Computer Science
              </p>
              <p className="info lead">FSC (Pre-Engineering)</p>
              <p className="info lead">
                Matric in Computer Science
                {/* <span>•</span>
                <em className="date"></em> */}
              </p>
            </div>
          </div>
          {/* item end */}
        </div>
        {/* main-col end */}
      </div>
      {/* End Education */}
    </section>
  );
}
