import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import '../ContactPage/ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <MainScreen title="Contact Us" />


      <div className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions, please feel free to contact us:</p>
        <ul>
          <li><i className="fa fa-map-marker"></i>825 Main St, Weymouth, 02188</li>
          <li><i className="fa fa-phone"></i>(339) 205-9836</li>
          <li><i className="fa fa-envelope"></i>patel.nishant@northeastern.edu</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

      {/* <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <p class="text-muted mt-2">
                Get in touch with us for more details.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="contact-details mb-4 mb-lg-0">
              <p class="mb-3">
                <i class="mdi mdi-email-outline align-middle text-muted fs-20 me-2"></i>
                <span class="fw-medium">support@numoves.com</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-web align-middle text-muted fs-20 me-2"></i>
                <span class="fw-medium">www.numoves.com</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-phone align-middle text-muted fs-20 me-2"></i>
                <span class="fw-medium">+1 (123) 789 4564</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-hospital-building text-muted fs-20 me-2"></i>
                <span class="fw-medium">9:00 AM - 9:00 PM</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-map-marker-outline text-muted fs-20 me-2"></i>
                <span class="fw-medium">1171 Bolyston Street, Boston, MA.</span>
              </p>
            </div>
          </div>
          <div class="col-lg-7">
            <form
              method="post"
              onsubmit="return validateForm()"
              class="contact-form"
              name="myForm"
              id="myForm"
            >
              <span id="error-msg"></span>
              <div class="row">
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Enter your name*"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Enter your email*"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative mb-3">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative mb-3">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Enter your message*"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-end">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    class="btn btn-primary"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactPage;
