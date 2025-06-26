import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaClock, FaUserCheck, FaBullseye } from 'react-icons/fa';

const WebsiteDevelopment = () => {
  return (
   <div className="text-slate-800">
  {/* Header */}
  <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-100 px-6 text-center">
  <div className="mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center space-x-2">
    <span className="text-yellow-400">🛡️</span>
    <span className="text-black text-sm">Trusted Web Solutions</span>
  </div>

  <h1 className="text-5xl sm:text-6xl font-extrabold text-black leading-tight">
    Crafting Exceptional <br />
    Websites with <span className="text-black">Sownmark</span>
  </h1>

  <p className="mt-6 text-lg text-Black max-w-xl">
    From engaging portfolios to robust e-commerce platforms, we build
    digital experiences that drive results.
  </p>
   <Link
    to="/contact"
   className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition flex items-center gap-2 shadow-lg">
    Get Started Today <span>→</span>
   </Link>
</header>



      {/* Section 1: Philosophy */}
    <section className="h-[90vh] flex flex-col justify-center px-6 bg-blue-900 text-center">
  <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
    More Than Just a Website – <br className="hidden sm:block" />
    A Business Asset
  </h2>
  <p className="max-w-4xl mx-auto text-lg text-blue-100">
    Your website is your digital storefront, your most powerful marketing tool,
    and a crucial interface for your customers. At <span className="text-blue-200">Sownmark</span>,
    we don't just build websites; we create responsive, secure, user-friendly,
    and high-performing platforms that align with your brand identity and
    achieve your business objectives.
  </p>
</section>



      {/* Section 2: Services */}
      <section className="py-16 px-6 bg-indigo-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Expertise in Web Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[{
            title: "Custom Website Design & Development",
            desc: "Tailored website solutions built from the ground up, designed to perfectly match your brand and functional requirements.",
            benefits: ["Unique brand representation", "Scalable and flexible architecture", "Optimized for performance"]
          }, {
            title: "E-commerce Website Development",
            desc: "Powerful online stores that provide seamless shopping experiences and drive sales.",
            benefits: []
          }, {
            title: "Responsive Web Design",
            desc: "Ensuring your website looks and functions perfectly on all devices – desktops, tablets, and mobile.",
            benefits: []
          }, {
            title: "Website Redesign & Revamp",
            desc: "Modernize your existing website for improved aesthetics, functionality, and performance.",
            benefits: []
          }, {
            title: "Website Maintenance & Support",
            desc: "Ongoing technical support, security updates, and content management to keep your site running smoothly.",
            benefits: []
          }, {
            title: "CMS Development (e.g., WordPress)",
            desc: "User-friendly content management systems empowering you to easily update your website.",
            benefits: []
          }, {
            title: "UI/UX Design",
            desc: "Creating intuitive and engaging user interfaces for an exceptional user experience.",
            benefits: []
          }].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-left">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-2 text-slate-600">{service.desc}</p>
              {service.benefits.length > 0 && (
                <ul className="list-disc list-inside text-sm text-slate-600">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="h-[90vh] flex flex-col justify-center px-6 bg-blue-900">
  <h2 className="text-3xl font-semibold text-center mb-10 text-white">
    Our Collaborative Development Process
  </h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      "Discovery & Planning",
      "Design & Prototyping",
      "Development & Coding",
      "Testing & Quality Assurance",
      "Deployment & Launch",
      "Post-Launch Support"
    ].map((step, i) => (
      <div key={i} className="bg-indigo-50 p-6 rounded-lg shadow text-center">
        <h3 className="font-bold text-lg mb-2">
          Step {i + 1}: {step}
        </h3>
        <p className="text-sm text-slate-600">
          {[
            "Understanding your vision, goals, and technical requirements.",
            "Crafting wireframes, mockups, and interactive prototypes for your approval.",
            "Bringing the design to life with clean, efficient code.",
            "Rigorous testing across devices and browsers to ensure flawless performance.",
            "Seamless launch of your new website.",
            "Ongoing support and maintenance to ensure long-term success."
          ][i]}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Section 4: Why Choose Us */}
    <section className="h-[90vh] flex flex-col justify-center px-6 bg-indigo-100">
  <h2 className="text-3xl font-semibold text-center mb-10">
    Building Your Online Foundation for Success
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        icon: <FaUserCheck />,
        title: "Expert Developers",
        desc: "Skilled team passionate about crafting exceptional web experiences."
      },
      {
        icon: <FaBullseye />,
        title: "User-Centric Design",
        desc: "Focus on intuitive navigation and engaging user journeys."
      },
      {
        icon: <FaSearch />,
        title: "SEO-Friendly Development",
        desc: "Websites built with search engine best practices in mind."
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile-First Approach",
        desc: "Ensuring perfect display and functionality on all devices."
      },
      {
        icon: <FaClock />,
        title: "Timely Delivery & Support",
        desc: "Reliable project management and ongoing assistance."
      }
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
        <div className="text-indigo-600 text-3xl mb-2">{item.icon}</div>
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-slate-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Section 5: Portfolio Placeholder */}
     <section className="h-[50vh] flex flex-col justify-center px-6 bg-blue-600 text-center">
  <h2 className="text-3xl font-semibold mb-6 text-white">Our Work Speaks for Itself</h2>
  <p className="text-white mb-4">
    (Portfolio section coming soon. Ask us to showcase our recent projects!)
  </p>
   <Link
    to="/blog"
    className="bg-blue-900 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-blue-800 transition inline-block w-auto mx-auto"

  >
    See here
  </Link>
</section>


      {/* Section 6: CTA */}
    <section className="h-[50vh] flex flex-col justify-center px-6 bg-gradient-to-br from-indigo-50 to-indigo-100 text-center">
  <h2 className="text-3xl font-bold mb-4">Ready to Build Your Digital Masterpiece?</h2>
  <p className="mb-6">
    Let's discuss your website vision and how Sownmark can bring it to life.
  </p>
  <Link
    to="/contact"
    className="bg-blue-900 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-blue-800 transition inline-block w-auto mx-auto"

  >
    Get a Free Website Quote
  </Link>
</section>


    </div>
  );
};

export default WebsiteDevelopment;