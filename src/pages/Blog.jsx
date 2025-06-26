import React from 'react';
import { Link } from 'react-router-dom';
import graphImg from '../assets/essential.webp';
import infographicImg from '../assets/seo.jpeg';
import screenshotImg from '../assets/guide.jpg';
import teamImg from '../assets/hiring.jpeg';
import uiImg from '../assets/responsive.jpeg';
import abstractImg from '../assets/leverage.jpg';

const Blog = () => {
  const getImageUrl = (type) => {
    const urls = {
      graph: graphImg,
      infographic: infographicImg,
      screenshot: screenshotImg,
      team: teamImg,
      ui: uiImg,
      abstract: abstractImg,
    };
    return urls[type] || graphImg;
  };

  const blogPosts = [
    { id: 1, title: "5 Essential Digital Marketing Skills for 2025", excerpt: "Discover the top skills you need to stay competitive in the evolving digital landscape.", author: "Alex Johnson", date: "June 15, 2025", readTime: "4 min read", imageType: "graph", link: "/firstbg" },
    { id: 2, title: "SEO Checklist: How to Rank Higher on Google", excerpt: "A practical step-by-step guide to optimizing your website for better search engine visibility.", author: "Sarah Williams", date: "June 8, 2025", readTime: "6 min read", imageType: "infographic", link: "/Seo" },
    { id: 3, title: "The Ultimate Guide to Social Media Content Planning", excerpt: "Learn how to create engaging content calendars that drive consistent audience engagement.", author: "Mike Chen", date: "June 1, 2025", readTime: "5 min read", imageType: "screenshot", link: "/Guide" },
    { id: 4, title: "Hiring Your First Digital Marketing Manager", excerpt: "Key qualities to look for when building your successful marketing team and scaling your effective efforts..", author: "Priya Patel", date: "May 25, 2025", readTime: "3 min read", imageType: "team", link: "/Hiring" },
    { id: 5, title: "Why Responsive Web Design is Non-Negotiable", excerpt: "Understanding how mobile-first design impacts user experience and conversion rates.", author: "David Kim", date: "May 18, 2025", readTime: "4 min read", imageType: "ui", link: "/Responsive" },
    { id: 6, title: "Leveraging Artificial Intelligence in Digital Marketing", excerpt: "Explore practical applications of artificial intelligence in modern marketing strategies.", author: "Emma Rodriguez", date: "May 10, 2025", readTime: "7 min read", imageType: "abstract", link: "/Leveraging" }
  ];

  const categories = ['SEO', 'Social Media', 'Web Development', 'Hiring', 'Marketing Tips', 'Analytics', 'Case Studies'];

  return (
    <div className="bg-blue-600">
      <header>
        <section className="h-[100vh] bg-gradient-to-br from-blue-50 to-cyan-100 text-black flex flex-col items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sownmark Blog
            </h1>

            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Welcome to the Sownmark Blog — your go-to destination for the latest insights,
              strategies, and trends in <span className="font-semibold text-blue-600">digital marketing</span>, 
              <span className="font-semibold text-blue-500"> talent acquisition</span>, and 
              <span className="font-semibold text-blue-900"> web development</span>. Stay updated, stay ahead!
            </p>

            <button className="px-6 py-3 rounded-full bg-white text-blue-800 font-semibold hover:scale-105 hover:bg-gray-100 transition transform duration-300 shadow-lg">
              Explore Latest Posts →
            </button>
          </div>
        </section>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <main className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {blogPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={getImageUrl(post.imageType)} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2 text-sm text-black">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-black hover:text-black transition-colors">{post.title}</h2>
                    <p className="text-black mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-black">By {post.author}</span>
                      <Link to={post.link} className="text-black hover:text-blue-900 font-medium flex items-center">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>

          <aside className="lg:w-1/3 mt-8 lg:mt-0 space-y-8 px-1 sm:px-0">
            <div className="bg-blue-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-blue-500">
                    <a href="#" className="text-blue-100 hover:text-white transition-colors">{category}</a>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{(index + 1) * 3}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-indigo-700 p-6 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="mb-4 opacity-90">Get the latest digital insights delivered to your inbox</p>
              <form>
                <div className="mb-3">
                  <input type="email" placeholder="Your email address" className="w-full p-3 rounded-lg bg-blue-400 placeholder-blue-200 text-white border border-blue-300 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <button type="submit" className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">Subscribe</button>
                <p className="text-xs mt-3 opacity-75">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
