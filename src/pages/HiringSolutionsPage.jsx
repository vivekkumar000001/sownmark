import React from 'react';
import { Link } from 'react-router-dom';
import headImg from '../assets/process.jpg';

const HiringSolutionsPage = () => {
  // Domain expertise data
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

  // Recruitment process steps
  const processSteps = [
    {
      id: 1,
      title: 'Understand Your Needs',
      description: 'We deep dive into your requirements, company culture, and the specific skills needed for the role.'
    },
    {
      id: 2,
      title: 'Talent Sourcing & Screening',
      description: 'Leveraging our extensive network and databases, we identify and rigorously screen potential candidates.'
    },
    {
      id: 3,
      title: 'Candidate Presentation',
      description: 'We present you with a shortlist of highly qualified and vetted candidates.'
    },
    {
      id: 4,
      title: 'Interview & Selection Support',
      description: 'We assist with interview coordination and provide support throughout the selection process.'
    },
    {
      id: 5,
      title: 'Post-Hiring Follow-up',
      description: 'Our commitment extends beyond placement, ensuring a smooth transition for both parties.'
    }
  ];

  // Partnership advantages
  const advantages = [
    { 
      id: 1, 
      title: 'Access to Top Talent', 
      description: 'Reach a pool of pre-vetted, high-caliber candidates.', 
      icon: '👥' 
    },
    { 
      id: 2, 
      title: 'Time & Cost Efficiency', 
      description: 'Save valuable time and resources on recruitment efforts.', 
      icon: '⏱️' 
    },
    { 
      id: 3, 
      title: 'Domain Expertise', 
      description: 'Benefit from our in-depth understanding of specialized domains.', 
      icon: '🔍' 
    },
    { 
      id: 4, 
      title: 'Tailored Solutions', 
      description: 'Customized recruitment strategies to meet your unique hiring challenges.', 
      icon: '🎯' 
    },
    { 
      id: 5, 
      title: 'Dedicated Support', 
      description: 'A dedicated account manager to guide you every step of the way.', 
      icon: '🤝' 
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sownmark: Connecting Companies with Top Digital Talent
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your trusted partner for recruiting skilled professionals across digital marketing and other domains
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Post a Job / Inquire Now
          </Link>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Recruitment for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Sownmark, we understand that finding the right talent is crucial for your business growth. Our meticulous recruitment process ensures we identify, vet, and present candidates who not only possess the required skills but also align with your company's culture and values.
            </p>
          </div>
        </div>
      </section>

      {/* Domain Expertise Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Specialized Recruitment Across Key Domains
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {domains.map(domain => (
              <div 
                key={domain.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-amber-700 mb-4">
                  {domain.title}
                </h3>
                <ul className="space-y-3">
                  {domain.roles.map((role, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Streamlined Hiring Process
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-900 font-bold text-xl rounded-full flex items-center justify-center mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <img 
                src={headImg} 
                alt="Sownmark recruitment process" 
                className="rounded-xl shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Your Advantage with Sownmark Recruitment
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map(item => (
              <div 
                key={item.id} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us your hiring needs, and let Sownmark find the perfect fit for your organization.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-teal-700 hover:text-teal-900 font-bold py-4 px-10 rounded-full text-lg transition duration-300"
          >
            Post a Job / Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HiringSolutionsPage;