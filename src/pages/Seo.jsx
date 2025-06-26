import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/seo.jpeg';

const SEOChecklistPage = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img
            src={headImage}
            alt="SEO Checklist"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-blue-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            SEO Tips
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            SEO Checklist: How to Rank Higher on Google
          </h1>
          <p className="text-lg text-white mb-8">
            A practical step-by-step guide to optimizing your website for better search engine visibility.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>June 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>6 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Alex Martin</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-blue text-white">
            <h2>Introduction</h2>
            <p>
              Ranking high on Google isn't luck—it's strategy. This SEO checklist gives you
              the exact steps to improve visibility and bring more traffic to your site.
            </p>

            <h3>1. Conduct Keyword Research</h3>
            <p>
              Use tools like Google Keyword Planner or Ahrefs to find the right keywords your audience is searching for.
            </p>

            <h3>2. Optimize On-Page SEO</h3>
            <ul>
              <li>Use proper title tags and meta descriptions</li>
              <li>Include keywords in headings and content</li>
              <li>Use image alt text and internal linking</li>
            </ul>

            <h3>3. Improve Website Speed</h3>
            <p>
              Compress images, use caching, and choose a fast hosting provider to boost performance.
            </p>

            <h3>4. Mobile-Friendly Design</h3>
            <p>
              Make sure your site is responsive and works well on all devices. Google gives priority to mobile-first sites.
            </p>

            <h3>5. Build Backlinks</h3>
            <p>
              Reach out to blogs and industry sites for guest posts and backlinks to build authority.
            </p>

            <h2>Conclusion</h2>
            <p>
              Follow this SEO checklist to climb the rankings and grow your traffic. Start applying these strategies today!
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">SEO</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Checklist</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-cyan-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Buttons aligned to right side */}
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
                alt="SEO Checklist"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                  SEO Tips
                </span>
                <h3 className="text-black font-semibold mb-2">
                  10 On-Page SEO Techniques You Shouldn't Ignore
                </h3>
                <p className="text-sm text-black mb-4">
                  Learn actionable on-page SEO strategies to improve your site's visibility.
                </p>
                <Link
                  to="/Seo"
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

export default SEOChecklistPage;
