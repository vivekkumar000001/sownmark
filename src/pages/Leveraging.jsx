import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/leverage.jpg';

const AIDigitalMarketingPage = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img
            src={headImage}
            alt="AI in Digital Marketing"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-blue-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            AI Marketing
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            Leveraging Artificial Intelligence in Digital Marketing
          </h1>
          <p className="text-lg text-white mb-8">
            Explore practical applications of artificial intelligence in modern marketing strategies.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>June 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>8 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Sophia Reed</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-blue text-white">
            <h2>Introduction</h2>
            <p>
              Artificial Intelligence (AI) is transforming the landscape of digital marketing.
              From personalized customer experiences to automated ad targeting, AI-driven tools
              are helping marketers optimize their strategies and improve ROI. This guide explores
              practical ways AI can be integrated into your marketing efforts.
            </p>

            <h3>1. Personalized Customer Experiences</h3>
            <p>
              AI analyzes customer behavior to deliver highly personalized recommendations, emails,
              and content. Tools like chatbots and recommendation engines enhance engagement and conversion rates.
            </p>

            <h3>2. Predictive Analytics</h3>
            <p>
              AI predicts customer behaviors, future trends, and buying patterns. This allows marketers
              to make data-driven decisions and launch campaigns with higher success rates.
            </p>

            <h3>3. Automated Content Creation</h3>
            <p>
              AI-powered tools can generate product descriptions, email subject lines, social media captions,
              and even blog content, saving time while maintaining quality.
            </p>

            <h3>4. Smart Ad Targeting</h3>
            <ul>
              <li>AI optimizes ad placements based on user data</li>
              <li>Improves click-through rates (CTR) and reduces cost-per-click (CPC)</li>
              <li>Delivers ads to the right audience at the right time</li>
            </ul>

            <h3>5. Chatbots and Virtual Assistants</h3>
            <p>
              Implement AI chatbots to handle customer queries 24/7, improving user experience,
              reducing workload, and increasing customer satisfaction.
            </p>

            <h3>6. AI-Driven Email Marketing</h3>
            <p>
              AI segments audiences and personalizes email campaigns based on past behavior,
              leading to higher open and conversion rates.
            </p>

            <h2>Conclusion</h2>
            <p>
              AI isn't the future—it's the present of digital marketing. Brands adopting AI-driven
              strategies gain a competitive edge with smarter insights, improved customer experiences,
              and more efficient campaigns. Start integrating AI into your marketing today.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">AI</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Digital Marketing</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Technology</span>
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
                alt="AI in Marketing"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                  AI Marketing
                </span>
                <h3 className="text-black font-semibold mb-2">
                  How AI is Changing Social Media Strategies
                </h3>
                <p className="text-sm text-black mb-4">
                  Discover how AI tools are optimizing social media campaigns for businesses.
                </p>
                <Link
                  to="/Leveraging"
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

export default AIDigitalMarketingPage;
