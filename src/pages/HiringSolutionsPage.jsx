import React from 'react';
import { Link } from 'react-router-dom';


const HiringSolutionsPage = () => {
  const domains = [
    {
      id: 1,
      title: 'Digital Marketing',
      roles: ['SEO Specialists', 'SEM Managers', 'Social Media Managers', 'Content Writers', 'Digital Strategists', 'Performance Marketers', 'Email Marketers', 'CRM Specialists']
    },
    {
      id: 2,
      title: 'IT & Tech',
      roles: ['Web Developers (Frontend, Backend, Full Stack)', 'Mobile App Developers', 'UI/UX Designers', 'QA Engineers', 'Data Analysts', 'Project Managers', 'IT Support']
    },
    {
      id: 3,
      title: 'Sales & Business Development',
      roles: ['Sales Executives', 'Business Development Managers', 'Account Managers']
    },
    {
      id: 4,
      title: 'Creative & Design',
      roles: ['Graphic Designers', 'Video Editors', 'Animators']
    }
  ];

  const advantages = [
    { id: 1, title: 'Access to Top Talent', description: 'Reach a pool of pre-vetted, high-caliber candidates.', icon: '🌟' },
    { id: 2, title: 'Time & Cost Efficiency', description: 'Save valuable time and resources on recruitment efforts.', icon: '⏱️' },
    { id: 3, title: 'Domain Expertise', description: 'Benefit from our in-depth understanding of specialized domains.', icon: '🧠' },
    { id: 4, title: 'Tailored Solutions', description: 'Customized recruitment strategies to meet your unique hiring challenges.', icon: '🎯' },
    { id: 5, title: 'Dedicated Support', description: 'A dedicated account manager to guide you every step of the way.', icon: '🤝' }
  ];

  return (
    <div>
      {/* Hero Section */}
     <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-100 py-24 md:py-32">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
      Sownmark: <span className="text-cyan-600">Connecting Companies with Top Digital Talent</span>
    </h1>
    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
      Your trusted partner for recruiting skilled professionals across digital marketing, tech, and more.
    </p>
  </div>
</section>





      {/* Domain Expertise */}
     <section className="py-20 bg-gradient-to-br from-orange-100 to-amber-200">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-800 mb-12">
      Domain-Specific Recruitment
    </h2>

    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      {domains.map(domain => (
        <div
          key={domain.id}
          className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg transition border border-amber-200"
        >
          <h3 className="text-xl font-semibold text-amber-700 mb-4">
            {domain.title}
          </h3>
          <ul className="space-y-2 text-brown-700 text-sm">
            {domain.roles.map((role, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">✔️</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Process */}
     <section className="py-20 bg-gradient-to-tr from-cyan-800 to-blue-900">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
      Our Hiring Process
    </h2>
    <div className="grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left: Steps */}
      <ol className="space-y-10">
        {[
          'Understand Your Needs',
          'Talent Sourcing & Screening',
          'Candidate Presentation',
          'Interview & Selection Support',
          'Post-Hiring Follow-up'
        ].map((step, index) => (
          <li key={index} className="flex flex-col md:flex-row md:items-center md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-white text-cyan-800 font-bold text-lg rounded-full flex items-center justify-center">
              {index + 1}
            </div>
            <div className="mt-3 md:mt-0">
              <h4 className="text-lg font-semibold text-white">{step}</h4>
              <p className="text-slate-200 text-sm mt-1">
                {index === 0 && 'We dive into your needs and company culture.'}
                {index === 1 && 'We source and screen candidates rigorously.'}
                {index === 2 && 'We present only the best-fit professionals.'}
                {index === 3 && 'We assist throughout interview and hiring stages.'}
                {index === 4 && 'We ensure smooth post-hire integration and feedback.'}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/head.jpg"
          alt="Hiring Process Illustration"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>



      {/* Advantages */}
     <section className="py-20 bg-gradient-to-br from-cyan-200 via-cyan-100 to-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-900 mb-12">
      Why Partner with Sownmark?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {advantages.map(item => (
        <div
          key={item.id}
          className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition border border-cyan-100"
        >
          <div className="text-4xl text-cyan-600 mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
          <p className="text-slate-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Your Team Together</h2>
          <p className="text-lg text-teal-100 mb-8">
            Share your hiring needs and let Sownmark find your next star performer.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-emerald-100 transition"
          >
            Post a Job / Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HiringSolutionsPage;


