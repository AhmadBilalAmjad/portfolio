import React from "react";

export default function Contact() {
  const formSubmit = () => {
    window.location.reload();
  };
  return (
    <section id="contact">
      <div className="row">
        <div className="twelve columns">
          {/* form */}
          <form action name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name !!!"
                  size={35}
                  id="contactName"
                  name="contactName"
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email !!!"
                  size={35}
                  id="contactEmail"
                  name="contactEmail"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  placeholder={"Message !!!"}
                />
              </div>
              <div>
                <button className="submit" type="button" onClick={formSubmit}>
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
