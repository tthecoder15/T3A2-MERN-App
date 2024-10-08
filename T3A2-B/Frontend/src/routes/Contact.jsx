import React from "react";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="content-frame">
      <div className="contact-frame">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <div className="contact-info-section">
            <h4>Visit</h4>
            <p>
              Visit Pawfect Care at our location of 1 First St in Melbourne,
              Victoria, Australia, and speak face to face with our friendly
              admin staff.
            </p>
          </div>
          <div className="contact-info-section">
            <h4>Call Us</h4>
            <p>
              You can call Pawfect Care during office hours on 0412 345 678. In
              case of an emergency, you can phone our after-hours contact phone
              on 0423 456 789.
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-info-section">
            <h4>Contact Form</h4>
            <p>
              We are available through email, just provide your full name, your
              best contact number, your email address, some of your pet details,
              and your query in the form below, and one of our staff will get
              back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;