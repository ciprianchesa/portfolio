import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gr5y44a', 'template_k1qfiqj', e.target, 'user_SHLKn2xBkl3ckoRqEHfkt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div class="txtb" className="col-8 form-group mx-auto">
              <input type="hidden" name="contact_number" />
            </div>
            <div class="txtb" className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="user_name" required />
            </div>
            <div class="txtb" className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email" name="user_email" required />
            </div>
            <div class="txtb" className="col-8 form-group mx-auto">
              <textarea className="form-control" cols="30" rows="6" placeholder="Your message" name="message" />
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn btn-info" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}