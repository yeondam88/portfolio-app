import React from "react";

const ContactForm = props => (
  <div className="contact-container">
    <div className="contact-form">
      <form>
        <h4>Send a Message</h4>
        <input type="text" name="name" required placeholder="Name" />
        <input type="email" name="email" required placeholder="Email" />
        <input type="text" name="phone" required placeholder="Phone" />
        <textarea name="message" rows="12" placeholder="Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
);

export default ContactForm;
