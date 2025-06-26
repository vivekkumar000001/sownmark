import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/responsive.jpeg';

const ResponsiveWebDesignPage = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img
            src={headImage}
            alt="Responsive Web Design"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-blue-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            Web Design
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            Why Responsive Web Design is Non-Negotiable
          </h1>
          <p className="text-lg text-white mb-8">
            Understanding how mobile-first design impacts user experience and conversion rates.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>June 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>6 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">David Lee</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-blue text-white">
            <h2>Introduction</h2>
            <p>
              In today’s digital world, having a website that adjusts seamlessly across devices is no longer optional — it’s essential.
              A responsive design ensures that your website looks great and functions perfectly on desktops, tablets, and smartphones.
            </p>

            <h3>1. What is Responsive Web Design?</h3>
            <p>
              Responsive web design means a website automatically adjusts its layout, images, and functionalities to fit any screen size.
              Whether users are browsing from a phone, tablet, or desktop, their experience remains consistent and user-friendly.
            </p>

            <h3>2. Mobile-First Design Matters</h3>
            <p>
              With over 60% of web traffic coming from mobile devices, designing for mobile first is critical.
              Google also prioritizes mobile-friendly websites in search rankings, directly affecting your SEO.
            </p>

            <h3>3. Impact on User Experience</h3>
            <ul>
              <li>Improves navigation and readability on all devices</li>
              <li>Faster load times reduce bounce rates</li>
              <li>Ensures consistency across devices, enhancing trust</li>
            </ul>

            <h3>4. Boosts Conversion Rates</h3>
            <p>
              A website that's easy to navigate on mobile increases the likelihood of visitors taking action—whether it's filling out a form, making a purchase, or contacting your team.
            </p>

            <h3>5. Future-Proof Your Website</h3>
            <p>
              Responsive design adapts to new devices and screen sizes, reducing the need for constant redesigns as technology evolves.
            </p>

            <h2>Conclusion</h2>
            <p>
              A responsive web design isn't just a trend; it's a necessity.
              It impacts everything from user experience to SEO rankings and conversion rates.
              Make the shift to responsive design today to stay ahead in the digital landscape.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Web Design</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Responsive</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">UX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-cyan-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end gap-3 mt-4">
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-blue-700 transition"
            >
              ← Back to Blog
            </Link>
            <Link
              to="/"
              className="bg-slate-800 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-slate-900 transition"
            >
              ← Back to Home
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8">Explore More Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={headImage}
                alt="Web Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                  Design Tips
                </span>
                <h3 className="text-black font-semibold mb-2">
                  Top UX Design Principles for 2025
                </h3>
                <p className="text-sm text-black mb-4">
                  Learn the core UX design principles to create better user experiences.
                </p>
                <Link
                  to="/Responsive"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions? Get in Touch!</h2>
          <p className="mb-10">
            Fill out the form below and we'll get back to you shortly.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveWebDesignPage;
