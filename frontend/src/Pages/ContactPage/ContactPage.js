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

      
    </>
  );
};

export default ContactPage;
