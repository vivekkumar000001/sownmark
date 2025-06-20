// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Visionary leader passionate about digital transformation and empowering talent.',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Head of Education',
      bio: 'Seasoned digital marketer with expertise in developing engaging curricula.',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Head of Recruitment',
      bio: 'Experienced talent acquisition specialist connecting businesses with top professionals.',
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Head of Agency',
      bio: 'Strategic digital marketing leader driving client success and ROI.',
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Lead Web Developer',
      bio: 'Creative and skilled developer crafting exceptional online experiences.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Sownmark: Empowering Your Digital Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in digital marketing education, talent acquisition, agency services, and web development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-3">
        Our Guiding Principles
        <span className="block w-20 h-1 bg-blue-600 absolute left-1/2 -translate-x-1/2 bottom-0 rounded"></span>
      </h2>
      <h3 className="text-2xl font-semibold text-blue-600 mt-2 mb-4">Our Mission</h3>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        To empower individuals and businesses with the knowledge, talent, and strategies needed to thrive in the dynamic digital landscape.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      {[
        {
          title: "Excellence",
          description: "Committed to delivering the highest quality in all our services.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          )
        },
        {
          title: "Innovation",
          description: "Continuously evolving to stay ahead of digital trends.",
          icon: (
            <>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
          )
        },
        {
          title: "Integrity",
          description: "Operating with transparency, honesty, and ethical practices.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          )
        },
        {
          title: "Client Success",
          description: "Our ultimate success is measured by the success of our clients.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          )
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
        >
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Team Section */}
      {/* Team Section */}
<section className="pt-10 pb-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-14 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded">
      The Sownmark Team
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {teamMembers.map((member) => (
        <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <div className="w-full h-64 bg-gray-200 border-2 border-dashed flex items-center justify-center text-gray-400 text-xl font-semibold">
            {/* Optional: Add placeholder text or image */}
            Image
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
      Let's Connect and Grow Together
    </h2>
    <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
      We're passionate about what we do, and we'd love to learn about your goals.
    </p>
    <Link
      to="/contact"
      className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
    >
      Contact Sownmark
    </Link>
  </div>
</section>

    </div>
  );
};

export default AboutPage;