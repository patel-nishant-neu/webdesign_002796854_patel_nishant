import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
  {/* Top Section */}
  <div className="container mx-auto px-6 py-12 grid grid-cols-3 gap-6">
    {/* Column 1 */}
    <div className="column1">
      <img src="your-logo-url.png" alt="Website Logo" className="w-24 h-24 mb-4" />
      <p>
        This is some brief information about your company, what you do, and your mission statement.
      </p>
    </div>
    {/* Column 2 */}
    <div className="column2">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul>
        <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
        <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
        <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
        <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
      </ul>
    </div>
    {/* Column 3 */}
    <div className="column3">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <ul>
        <li>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fas fa-phone"></i> (555) 123-4567
        </li>
        <li>
          <i className="fas fa-envelope"></i> info@example.com
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="bottom-section border-t border-gray-700 py-4 text-center">
    <p className="text-gray-400">
      &copy; 2023 Your Company. All rights reserved. | <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a> | <a href="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms and Conditions</a>
    </p>
  </div>
</footer>

  );
};

export default Footer;
