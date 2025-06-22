import React from 'react';
import Hero from '../components/sections/Hero';
import Card from '../components/ui/Card';
import { 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaCertificate, 
  FaHandshake 
} from 'react-icons/fa';
import TestimonialSlider from '../components/ui/TestimonialSlider';

const DigitalMarketingPage = () => {
  const courses = [
    {
      icon: <FaBookOpen />,
      title: "Certified Digital Marketing Professional",
      description: "A comprehensive program covering SEO, SEM, Social Media, Content Marketing, Email Marketing, Analytics, and more.",
      actionText: "View Details",
      color: "blue"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Advanced SEO & Content Marketing",
      description: "Deep dive into advanced SEO techniques, content strategy development, and optimization for maximum visibility and engagement.",
      actionText: "View Details",
      color: "emerald"
    },
    {
      icon: <FaCertificate />,
      title: "Social Media Marketing Specialist",
      description: "Master social media strategy, content creation, advertising, and analytics across all major platforms.",
      actionText: "View Details",
      color: "amber"
    },
    {
      icon: <FaHandshake />,
      title: "Google Ads & Analytics Masterclass",
      description: "Learn to create, manage, and optimize Google Ads campaigns and leverage Google Analytics for data-driven decisions.",
      actionText: "View Details",
      color: "violet"
    }
  ];
  
  const benefits = [
    "Expert Instructors: Learn from professionals with years of industry experience.",
    "Practical Curriculum: Focus on real-world scenarios and actionable strategies.",
    "Certification: Receive a recognized certification upon course completion.",
    "Career Support: Guidance and insights to help you land your dream digital marketing role.",
    "Community Access: Join a vibrant community of learners and professionals."
  ];
  
  return (
    <div>
   <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text */}
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-900 mb-6 leading-tight">
        <strong>Master Digital Marketing with Sownmark</strong>
      </h1>
      <p className="text-lg md:text-2xl text-slate-700">
        From foundational concepts to advanced strategies, our courses equip you with the skills to excel.
      </p>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="\mark.jpg"  // 📸 Replace with your actual image filename
        alt="Digital Marketing Illustration"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


      
     <section className="section-padding bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-100">
  <div className="container-padding">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-900 mb-12">
      Our Teaching Philosophy
    </h2>
    <div className="max-w-3xl mx-auto text-center text-lg text-slate-800">
      <p className="mb-6">
        At Sownmark, we believe in practical, hands-on learning. Our curriculum is designed by seasoned digital marketing professionals, ensuring you gain relevant, up-to-date knowledge and actionable skills you can apply immediately.
      </p>
      <p>
        We focus on real-world case studies and project-based learning to solidify your understanding and prepare you for success in the digital landscape.
      </p>
    </div>
  </div>
</section>

      
      <section id="courses" className="section-padding bg-slate-50">
        <div className="container-padding">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-900 mt-12 mb-12">
  Choose Your Path to Digital Mastery
</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
      
  <section className="section-padding bg-blue-900 text-white">
  <div className="container-padding">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-12 mb-12">
      Why Choose Sownmark for Your Digital Marketing Education?
    </h2>

    <div className="max-w-3xl mx-auto">
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-white/10 text-white rounded-full p-2 mr-4 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      
      <section id="testimonials" className="section-padding bg-slate-50">
        <div className="container-padding">
  <h2 className="text-center text-3xl md:text-4xl font-extrabold text-cyan-900 mt-12 mb-12">
  Success Stories from Our Learners
</h2>


          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;