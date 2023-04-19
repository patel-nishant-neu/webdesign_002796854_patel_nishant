import React from 'react';
import { Carousel } from 'react-responsive-carousel';
//import styles from './Home.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundimg from "../images/3.png";

function LandingPage() {
  return (
    <>
    <div>
      {/* Section 1: Hero Section */}
      <section className="hero-section bg-cover bg-center bg-fixed relative flex items-center justify-center h-screen" style={{backgroundImage: {backgroundimg} }}>
        <div className='justify-center items-center'>
        <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          <h1>The best food in the Boston you will find at our Palace</h1>
        </div>
        <br></br>
        <div className=" justify-center items-center flex hero-buttons mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mx-2">Button 1</button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mx-2">Button 2</button>
        </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section className="about-us flex flex-col md:flex-row py-12 px-6">
        <div className="about-image w-full md:w-1/2">
          <img src="your-image-url.jpg" alt="About Us" className="w-full h-auto" />
        </div>
        <div className="about-content w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">Your content here</p>
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="features py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        <div className="feature-card p-6 bg-white shadow-lg rounded-md">
          <h3 className="text-xl font-bold mb-2">Feature 1</h3>
          <p className="text-gray-600">Feature description</p>
        </div>
        <div className="feature-card p-6 bg-white shadow-lg rounded-md">
          <h3 className="text-xl font-bold mb-2">Feature 2</h3>
          <p className="text-gray-600">Feature description</p>
        </div>
        <div className="feature-card p-6 bg-white shadow-lg rounded-md">
          <h3 className="text-xl font-bold mb-2">Feature 3</h3>
          <p className="text-gray-600">Feature description</p>
        </div>
        <div className="feature-card p-6 bg-white shadow-lg rounded-md">
          <h3 className="text-xl font-bold mb-2">Feature 4</h3>
          <p className="text-gray-600">Feature description</p>
        </div>
      </section>

      {/* Section 4: Testimonials */}
<section className="testimonials bg-gray-100 py-12 px-6">
  <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
  <div className="testimonial-carousel space-x-4 flex overflow-x-scroll">
    <div className="testimonial-card w-96 p-6 bg-white shadow-lg rounded-md">
      <p className="text-gray-600 italic">"Amazing service and great products!"</p>
      <div className="flex items-center mt-4">
        <img src="person1-image-url.jpg" alt="Person 1" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-xl font-bold">Person 1</h4>
          <p className="text-gray-500">Role or Company</p>
        </div>
      </div>
    </div>
    <div className="testimonial-card w-96 p-6 bg-white shadow-lg rounded-md">
      <p className="text-gray-600 italic">"Incredible experience from start to finish!"</p>
      <div className="flex items-center mt-4">
        <img src="person2-image-url.jpg" alt="Person 2" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-xl font-bold">Person 2</h4>
          <p className="text-gray-500">Role or Company</p>
        </div>
      </div>
    </div>
    <div className="testimonial-card w-96 p-6 bg-white shadow-lg rounded-md">
      <p className="text-gray-600 italic">"I would recommend this company to anyone!"</p>
      <div className="flex items-center mt-4">
        <img src="person3-image-url.jpg" alt="Person 3" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-xl font-bold">Person 3</h4>
          <p className="text-gray-500">Role or Company</p>
        </div>
      </div>
    </div>
    {/* Add more testimonials as needed */}
  </div>
</section>

    

    </div>
    </>
  );
}

export default LandingPage;