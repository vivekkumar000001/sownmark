import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/essential.webp';

const BlogDetails = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img
            src={headImage}
            alt="Digital Marketing Skills"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-blue-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            Marketing Tips
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            5 Essential Digital Marketing Skills for 2025
          </h1>
          <p className="text-lg text-white mb-8">
            Discover the top skills you need to stay competitive in the evolving digital landscape.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>5 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Sarah Johnson</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-blue text-white">
            <h2>Introduction</h2>
            <p>
              As the digital landscape evolves, staying ahead requires mastering key skills that drive results.
              Here are the top five digital marketing skills you need for 2025.
            </p>

            <h3>1. Data-Driven Marketing</h3>
            <p>
              Understanding analytics tools like Google Analytics 4 and leveraging data to optimize campaigns is crucial.
              Marketers must interpret data-driven strategies.
            </p>

            <h3>2. AI and Automation</h3>
            <p>
              Artificial intelligence is transforming campaigns. Use AI for content creation, ad targeting, and segmentation.
            </p>

            <h3>3. Content Strategy</h3>
            <p>
              High-quality content remains king. Master storytelling, video, and SEO to capture audiences.
            </p>

            <h3>4. Social Media Expertise</h3>
            <p>
              Platforms like TikTok and Instagram demand creative strategies tailored to diverse audiences.
            </p>

            <h3>5. Technical SEO</h3>
            <p>
              Optimize websites for speed, mobile-friendliness, and crawlability to rank higher.
            </p>

            <h2>Conclusion</h2>
            <p>
              Master these skills to lead in digital marketing. Start with Sownmark’s courses today.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Skills</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Trends</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">2025</span>
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
                alt="Digital Marketing Skills"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                  Marketing Tips
                </span>
                <h3 className="text-black font-semibold mb-2">Leveraging AI in Digital Marketing: Trends to Watch</h3>
                <p className="text-sm text-black mb-4">
                  Explore how AI is transforming digital marketing strategies.
                </p>
                <Link
  to="/firstbg"
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
    </div>
  );
};

export default BlogDetails;
