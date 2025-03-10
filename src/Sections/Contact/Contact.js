import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div class="contact__form-container">
          <form action="https://formsubmit.co/mugeshsamraj@gmail.com" method="POST" class='contact__form'><input type='hidden' name='form-name' value='form 1' />
            <div class="form-container">
            <input type="hidden" name="_template" value="table"/>
              <div class="contact__form-field">
                <input
                  required
                  placeholder="Enter Your Full Name"
                  type="text"
                  class="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div class="contact__form-field">
                <input
                  required
                  placeholder="Enter Your Email Address"
                  type="email"
                  class="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div class="contact__form-field">
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input_message"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme btn--med ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact