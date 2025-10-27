import React from "react";
import "../App.css";

function Contact() {
  return (
    <section class="contact" id="contact">
      <div class="contact-container">
        <h2>Contact</h2>
        <form
          class="inputs"
          action="https://formspree.io/f/mqakbbzn"
          method="POST"
        >
          <input type="text" placeholder="Name" name="text" required />
          <input type="email" name="text" placeholder="Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Send a message"
            id=""
            required
          ></textarea>
          <button class="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
