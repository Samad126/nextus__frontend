import React from "react";
import {
  DefaultBtn,
  DefaultInput,
  DefaultTextArea,
} from "../../assets/components.styles";
import contactImage from "../../assets/images/contact-image.png";

function ContactUs() {
  return (
    <section id="contact-us">
      <div className="contact-us__container">
        <div className="contact-us__left">
          <div className="contact-us__left-header">
            <h1>Contact us</h1>
            <p>Subheading for description or instructions</p>
          </div>
          <form className="contact-us__left-form">
            <div>
              <label>
                First Name
                <DefaultInput placeholder="Jane" type="text" />
              </label>
              <label>
                Last name <DefaultInput placeholder="Smitherton" type="text" />
              </label>
            </div>
            <label>
              Email address
              <DefaultInput
                placeholder="email@janesfakedomain.net"
                type="email"
              />
            </label>
            <label>
              Your message
              <DefaultTextArea
                placeholder="Enter your question or message"
                type="text"
              />
            </label>
            <DefaultBtn color="#6875D1">Submit</DefaultBtn>
          </form>
        </div>
        <div className="contact-us__right">
          <img src={contactImage} alt="Contact Image" />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
