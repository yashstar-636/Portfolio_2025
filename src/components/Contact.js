import React, { use } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigation = useNavigate();
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
          <button
            class="btn"
            onClick={() => navigation("/travel")}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
