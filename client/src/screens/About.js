import React from "react";
import nishant from "../images/nishant.jpg";

const AboutUs = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-gradient-to-r from-pink-400 to-yellow-500 py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white">
            A brief description of your company, its mission, and its values.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto py-12 px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Replace the following cards with your actual team members */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={nishant} alt="Nishant Patel" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Nishant Patel</h3>
            <p className="text-gray-500 mb-4">MSIS - Bridge</p>
            <a href="https://linkedin.com/in/nshnger" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          {/* Other team member cards */}
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-100 py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Makes Us Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Replace the following points with your actual unique points */}
            <div className="flex items-start">
              <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
              <p>Point 1 that makes your company unique and stand out from the competition.</p>
            </div>
            {/* Other unique points */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
