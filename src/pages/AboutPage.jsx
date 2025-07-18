// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Importing team member images
import alexImg from '../assets/head.jpg';
import sarahImg from '../assets/head.jpg';
import michaelImg from '../assets/head.jpg';
import emilyImg from '../assets/head.jpg';
import davidImg from '../assets/head.jpg';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Visionary leader passionate about digital transformation and empowering talent.',
      image: alexImg,
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Head of Education',
      bio: 'Seasoned digital marketer with expertise in developing engaging curricula.',
      image: sarahImg,
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Head of Recruitment',
      bio: 'Experienced talent acquisition specialist connecting businesses with top professionals.',
      image: michaelImg,
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Head of Agency',
      bio: 'Strategic digital marketing leader driving client success and ROI.',
      image: emilyImg,
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Lead Web Developer',
      bio: 'Creative and skilled developer crafting exceptional online experiences.',
      image: davidImg,
    },
  ];

  return (
   <div>
  {/* Hero Section */}
  <section className="h-[100vh] bg-gradient-to-br from-blue-50 to-cyan-100 text-black flex flex-col items-center justify-center text-center px-4">
    <div>
      <div className="inline-block bg-white text-blue-800 px-4 py-1 rounded-full mb-6 text-sm font-medium shadow">
        ⭐ Your Digital Success Partner
      </div>

      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
        About Sownmark <br />
        Empowering Your Digital Journey
      </h1>

      <p className="text-lg text-black max-w-2xl mx-auto mb-8">
        Your trusted partner in digital marketing education, talent acquisition,
        agency services, and web development.
      </p>
       <Link 
  to="/contact"
  className="inline-flex px-4 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition items-center gap-2 shadow-lg mb-10"
>
  Connect With Us <span>→</span>
</Link>





      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold">50+</h2>
          <p className="text-sm text-black">Industry Partners</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">1K+</h2>
          <p className="text-sm text-black">Professionals Trained</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">3+</h2>
          <p className="text-sm text-black">Years of Impact</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-sm text-black">Projects Delivered</p>
        </div>
      </div>
    </div>
  </section>



      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded">
            The Sownmark Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-400 to-indigo-400 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Let's Connect and Grow Together
          </h2>
          <p className="text-xl text-black-500 max-w-2xl mx-auto mb-10">
            We're passionate about what we do, and we'd love to learn about your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Sownmark
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
