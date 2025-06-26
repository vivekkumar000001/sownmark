import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/head.jpg'; // Ensure this image path is correct

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cyan-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
          {/* Left Text Area */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1440] leading-tight mb-6">
              Unlock Your Digital <br />
              Potential with <br />
              Sownmark
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Master digital marketing, hire top talent, and drive online success with our expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#101c58] transition">
                  Hire Top Talent
                </button>
              </Link>

              <Link to="/contact">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#101c58] transition">
                  Get a Free Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={heroImage}
              alt="Team working on System"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
