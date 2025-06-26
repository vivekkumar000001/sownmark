import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/hiring.jpeg';

const HiringMarketingManagerPage = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img
            src={headImage}
            alt="Hiring Digital Marketing Manager"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-blue-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            Marketing Tips
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            Hiring Your First Digital Marketing Manager
          </h1>
          <p className="text-lg text-white mb-8">
            Key qualities to look for when building your marketing team and scaling your efforts.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>June 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>6 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Daniel Roberts</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-blue text-white">
            <h2>Introduction</h2>
            <p>
              As your business grows, so does the need for a dedicated digital marketing manager.
              Hiring the right person can make the difference between stagnant growth and scaling your brand effectively.
              This guide covers the essential qualities to look for and steps to hiring the right candidate.
            </p>

            <h3>1. Understand Your Needs</h3>
            <p>
              Before starting the hiring process, define what you expect. Are you looking for someone who can handle
              paid ads, SEO, content creation, or all of the above? Understanding this will shape the job description.
            </p>

            <h3>2. Key Skills to Look For</h3>
            <ul>
              <li>Proficiency in SEO, SEM, and social media marketing</li>
              <li>Experience with analytics tools like Google Analytics</li>
              <li>Strong content marketing and copywriting skills</li>
              <li>Knowledge of email marketing and automation</li>
              <li>Ability to manage paid advertising campaigns</li>
            </ul>

            <h3>3. Look for Strategic Thinking</h3>
            <p>
              A great digital marketing manager isn’t just an executor; they’re a strategist.
              Look for candidates who can create marketing plans aligned with your business goals.
            </p>

            <h3>4. Adaptability is Crucial</h3>
            <p>
              The digital landscape changes rapidly. Your hire should be someone who stays updated with trends,
              algorithm changes, and new tools.
            </p>

            <h3>5. Cultural Fit Matters</h3>
            <p>
              Besides technical skills, ensure the candidate fits your company culture.
              They should align with your brand’s values, communication style, and work ethic.
            </p>

            <h2>Conclusion</h2>
            <p>
              Hiring your first digital marketing manager is a pivotal step toward scaling your business.
              Focus on finding someone who has the right mix of skills, strategy, and cultural fit.
              The right person will drive growth, increase brand visibility, and help achieve long-term goals.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Digital Marketing</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Hiring</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Marketing Manager</span>
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
                alt="Hiring Marketing Manager"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                  Marketing Tips
                </span>
                <h3 className="text-black font-semibold mb-2">
                  Top 5 Marketing Tools for Small Businesses
                </h3>
                <p className="text-sm text-black mb-4">
                  Discover essential marketing tools to streamline and grow your business.
                </p>
                <Link
                  to="/Hiring"
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

export default HiringMarketingManagerPage;
