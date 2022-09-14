import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <>
      <h2 className="contact-heading">Say hi to me, let's talk</h2>
      <div className="main-container">
        <div className="form-container">
          <form className="form">
            <input className="half-input" type="text" placeholder="Your name" />
            <input
              className="half-input"
              type="number"
              placeholder="Your number"
            />

            <br></br>
            <input type="email" placeholder="Your email" />
            <br></br>
            <textarea rows="8" placeholder="Your message"></textarea>
            <br></br>
            <button type="submit" id="submit">
              Send Message
            </button>
          </form>
        </div>
        <div class="socials-container">
          <h3>Email</h3> <p>marvellousadesanya123@gmail.com</p>
          <p>Phone: 08090606381</p>
          <h3>Physical location</h3>
          <p>Surulere, Lagos, Nigeria...regularly frequents the island</p>
          <h3>My Socials</h3>
          <i className="fa-brands fa-facebook">
            <a href="https://web.facebook.com/BelikeMarv"></a>
          </i>
          <i className="fa-brands fa-instagram">
            <a href="https://www.instagram.com/1kingmarv"></a>
          </i>
          <i className="fa-brands fa-github">
            <a href="https://www.github.com/marvellousadesanya"></a>
          </i>
          <i className="fa-brands fa-square-twitter">
            <a href="https://www.twitter.com/belikemarv"></a>
          </i>
        </div>
      </div>
    </>
  );
}

export default Contact;
