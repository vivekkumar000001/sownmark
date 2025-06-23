import React from 'react';
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
    return urls[type] || graphImg; // default fallback image
  };

  const blogPosts = [
    { id: 1, title: "5 Essential Digital Marketing Skills for 2025", excerpt: "Discover the top skills you need to master to stay competitive in the evolving digital landscape.", author: "Alex Johnson", date: "June 15, 2025", readTime: "4 min read", imageType: "graph" },
    { id: 2, title: "SEO Checklist: How to Rank Higher on Google", excerpt: "A practical step-by-step guide to optimizing your website for better search engine visibility.", author: "Sarah Williams", date: "June 8, 2025", readTime: "6 min read", imageType: "infographic" },
    { id: 3, title: "The Ultimate Guide to Social Media Content Planning", excerpt: "Learn how to create engaging content calendars that drive consistent audience engagement.", author: "Mike Chen", date: "June 1, 2025", readTime: "5 min read", imageType: "screenshot" },
    { id: 4, title: "Hiring Your First Digital Marketing Manager", excerpt: "Key qualities to look for when building your marketing team and scaling your efforts.", author: "Priya Patel", date: "May 25, 2025", readTime: "3 min read", imageType: "team" },
    { id: 5, title: "Why Responsive Web Design is Non-Negotiable", excerpt: "Understanding how mobile-first design impacts user experience and conversion rates.", author: "David Kim", date: "May 18, 2025", readTime: "4 min read", imageType: "ui" },
    { id: 6, title: "Leveraging AI in Digital Marketing", excerpt: "Explore practical applications of artificial intelligence in modern marketing strategies.", author: "Emma Rodriguez", date: "May 10, 2025", readTime: "7 min read", imageType: "abstract" }
  ];

  const categories = ['SEO', 'Social Media', 'Web Development', 'Hiring', 'Marketing Tips', 'Analytics', 'Case Studies'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-cyan-200 to-indigo-900 text-black py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sownmark Blog</h1>
          <p className="text-xl opacity-90">Insights & Innovations in Digital Marketing, Recruitment, and Web Development</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <div className="mb-10 bg-white p-6 rounded-xl shadow-md">
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <input type="text" placeholder="Search blog posts..." className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <button className="absolute right-3 top-3.5 text-gray-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-12 bg-cyan-1000 rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <div className="h-full p-6 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">Featured</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Understanding Google Analytics 4: A Beginner's Guide</h2>
                    <p className="text-gray-600 mb-6">Learn how to navigate the latest version of Google's analytics platform and leverage its powerful features for your business.</p>
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4">
                        <p className="font-medium text-gray-800">Michael Thompson</p>
                        <p className="text-sm text-gray-500">June 20, 2025 · 8 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Google Analytics Dashboard" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={getImageUrl(post.imageType)} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">By {post.author}</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center mb-12">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">1</button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium">2</button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium">3</button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium">Next →</button>
              </nav>
            </div>
          </main>

          <aside className="lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">{category}</a>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">{(index + 1) * 3}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Posts</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map(post => (
                  <li key={post.id} className="flex items-start">
                    <img src={getImageUrl(post.imageType)} alt={post.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                    <div>
                      <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2">{post.title}</a>
                      <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-700 p-6 rounded-xl shadow-md text-white">
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

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Visual Content Types</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-16 h-16 mb-2">
                    <img src={getImageUrl('graph')} alt="Graphs" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Data Visualization</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-16 h-16 mb-2">
                    <img src={getImageUrl('infographic')} alt="Infographics" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Infographics</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-16 h-16 mb-2">
                    <img src={getImageUrl('screenshot')} alt="Screenshots" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Screenshots</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-16 h-16 mb-2">
                    <img src={getImageUrl('ui')} alt="UI Designs" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">UI Designs</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
