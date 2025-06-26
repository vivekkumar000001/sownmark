import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/guide.jpg';

const SocialMediaContentPage = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img
            src={headImage}
            alt="Social Media Content Planning"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-blue-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            Social Media Tips
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            The Ultimate Guide to Social Media Content Planning
          </h1>
          <p className="text-lg text-white mb-8">
            Learn how to create engaging content calendars that drive consistent audience engagement.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>June 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>7 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Emily Carter</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-blue text-white">
            <h2>Introduction</h2>
            <p>
              Content planning is the backbone of successful social media marketing.
              Without a clear strategy, posts become inconsistent and fail to engage audiences.
              This guide will teach you how to build a powerful content calendar that keeps your brand active and relevant.
            </p>

            <h3>1. Understand Your Audience</h3>
            <p>
              Start by identifying your target audience. Understand their interests, behaviors, and the type of content they interact with the most.
              Use tools like Facebook Insights, Instagram Analytics, and surveys to gather data.
            </p>

            <h3>2. Set Clear Goals</h3>
            <p>
              Define what you want to achieve with your content — whether it's increasing followers,
              boosting engagement, driving website traffic, or generating leads.
            </p>

            <h3>3. Choose the Right Platforms</h3>
            <p>
              Focus on the platforms where your audience is most active. Whether it's Instagram for visuals,
              LinkedIn for B2B, or TikTok for younger audiences, tailor your content accordingly.
            </p>

            <h3>4. Create a Content Calendar</h3>
            <ul>
              <li>Plan your posts weekly or monthly</li>
              <li>Mix content types: educational, entertaining, promotional, and interactive</li>
              <li>Align posts with holidays, events, and trending topics</li>
            </ul>

            <h3>5. Use Tools to Stay Organized</h3>
            <p>
              Utilize tools like Trello, Notion, or Later to organize your content schedule,
              collaborate with team members, and automate postings.
            </p>

            <h3>6. Measure and Adjust</h3>
            <p>
              Regularly review analytics to see which content performs best.
              Use this data to refine your strategy and improve future posts.
            </p>

            <h2>Conclusion</h2>
            <p>
              A well-planned content calendar helps maintain consistency, improves audience engagement,
              and supports your overall marketing goals. Start planning today to elevate your social media presence.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Content Planning</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Social Media</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Marketing</span>
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
                alt="Social Media Content"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                  Social Media Tips
                </span>
                <h3 className="text-black font-semibold mb-2">
                  How to Create Engaging Instagram Reels
                </h3>
                <p className="text-sm text-black mb-4">
                  Discover practical tips to boost engagement with Instagram Reels.
                </p>
                <Link
                  to="/Guide"
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

export default SocialMediaContentPage;
