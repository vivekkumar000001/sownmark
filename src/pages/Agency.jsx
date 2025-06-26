import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaUsers, FaChartLine, FaLaptopCode, FaMobileAlt, FaClock } from 'react-icons/fa';

const Agency = () => {
  return (
     <div className="text-slate-800">
  {/* Header */}
  <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-100  px-6 text-center">
  <h1 className="text-5xl sm:text-6xl font-extrabold text-black leading-tight mb-6">
    Sownmark: <br className="hidden sm:block" />
    Your Full-Service Digital Marketing Agency
  </h1>

  <p className="text-lg text-black max-w-2xl mb-8">
    Driving online visibility, engagement, and conversions for businesses of all sizes.
  </p>
   <Link to="/contact"
   className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition flex items-center gap-2 shadow-lg">
    Get Started Today <span>→</span>
  </Link>
</header>


      {/* Section 1: Philosophy */}
     <section className="h-[90vh] flex flex-col justify-center px-6 bg-blue-700 text-center">
  <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
    Strategic Digital Solutions <br className="hidden sm:block" />
    for Business Growth
  </h2>

  <p className="max-w-4xl mx-auto text-lg sm:text-xl text-white">
    At <span className="text-black font-semibold">Sownmark</span>, we believe in more than just digital presence — 
    we focus on delivering <span className="font-semibold">data-driven strategies</span> that generate 
    real, measurable growth. Our team of <span className="font-semibold">experienced marketers, designers, and developers</span> 
    collaborates closely with you to craft <span className="font-semibold">tailored solutions</span> that align with your brand, 
    engage your audience, and maximize ROI. From SEO, PPC, and social media campaigns to fully responsive websites 
    and e-commerce platforms — we empower your business to thrive in the digital landscape.
  </p>
</section>


      {/* Section 2: Services */}
      <section className="py-16 px-6 bg-indigo-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Comprehensive Digital Marketing Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[{
            title: "Search Engine Optimization (SEO)",
            desc: "Improve your organic search rankings, drive more qualified traffic, and establish your authority online with our expert SEO strategies.",
            benefits: ["Increased organic visibility", "Higher quality leads", "Long-term sustainable growth"]
          }, {
            title: "Pay-Per-Click (PPC) Advertising",
            desc: "Maximize your ad spend with highly targeted campaigns on Google Ads, social media, and more.",
            benefits: []
          }, {
            title: "Social Media Marketing",
            desc: "Build brand awareness, engage your audience, and drive conversions across key social platforms.",
            benefits: []
          }, {
            title: "Content Marketing",
            desc: "Create compelling and valuable content that attracts, engages, and converts your target audience.",
            benefits: []
          }, {
            title: "Email Marketing",
            desc: "Nurture leads, build customer loyalty, and drive sales through effective email campaigns.",
            benefits: []
          }, {
            title: "Website Analytics & Reporting",
            desc: "Gain insights into your website performance and campaign effectiveness with detailed reporting and analysis.",
            benefits: []
          }, {
            title: "Online Reputation Management (ORM)",
            desc: "Protect and enhance your brand's online image.",
            benefits: []
          }].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-2">{service.desc}</p>
              <ul className="list-disc list-inside text-sm text-slate-600">
                {service.benefits.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <Link to="/services" className="text-indigo-600 font-medium mt-2 inline-block hover:underline"></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Our Process */}
     <section className="h-[90vh] flex flex-col justify-center px-6 bg-blue-900 text-center text-white">
  <h2 className="text-3xl font-semibold mb-8">How We Drive Your Success</h2>
  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {["Discovery & Strategy", "Campaign Execution", "Monitoring & Optimization", "Reporting & Collaboration"].map((step, i) => (
      <div key={i} className="bg-indigo-50 p-4 rounded shadow">
        <h3 className="font-bold text-black mb-2">Step {i + 1}</h3>
        <p className="text-black">
          {[
            "Understanding your business, target audience, and goals to build a custom strategy.",
            "Implementing tailored strategies across chosen channels.",
            "Continuously tracking performance, analyzing data, and optimizing campaigns for maximum ROI.",
            "Transparent reporting on progress and regular communication with you."
          ][i]}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Section 4: Why Partner */}
      <section className="h-[90vh] flex flex-col justify-center px-6 bg-indigo-100">
  <h2 className="text-3xl font-semibold text-center mb-8">
    Your Trusted Partner for Digital Growth
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      {
        icon: <FaUsers />,
        title: "Experienced Team",
        desc: "Benefit from our team of certified digital marketing specialists.",
      },
      {
        icon: <FaChartLine />,
        title: "Data-Driven Strategies",
        desc: "Every decision is backed by analytics and industry insights.",
      },
      {
        icon: <FaLaptopCode />,
        title: "Customized Solutions",
        desc: "We tailor our services to your specific needs.",
      },
      {
        icon: <FaCheckCircle />,
        title: "Transparent Reporting",
        desc: "Clear, regular updates on campaign performance and ROI.",
      },
      {
        icon: <FaMobileAlt />,
        title: "Focus on ROI",
        desc: "Our ultimate goal is to deliver a strong return on your marketing investment.",
      },
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded shadow text-center">
        <div className="text-indigo-600 text-3xl mb-2 mx-auto">{item.icon}</div>
        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
        <p className="text-sm text-slate-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Section 5: CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Online Presence?</h2>
        <p className="mb-6">Let's discuss your marketing challenges and how Sownmark can help you achieve your business goals.</p>
        <Link to="/contact" className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-800 transition">Request a Free Consultation</Link>
      </section>
    </div>
  );
};

export default Agency;