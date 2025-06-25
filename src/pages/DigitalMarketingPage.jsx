import React from 'react';
import { 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaCertificate, 
  FaHandshake,
  FaCheckCircle
} from 'react-icons/fa';
import heroImg from '../assets/digitalmarkating.jpg'; // ✅ Adjust path based on your folder


const DigitalMarketingPage = () => {
  const courses = [
    {
      icon: <FaBookOpen className="text-blue-500 text-2xl" />,
      title: "Certified Digital Marketing Professional",
      description: "A comprehensive program covering SEO, SEM, Social Media, Content Marketing, Email Marketing, Analytics, and more.",
      actionText: "View Details",
      color: "blue"
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />,
      title: "Advanced SEO & Content Marketing",
      description: "Deep dive into advanced SEO techniques, content strategy development, and optimization for maximum visibility and engagement.",
      actionText: "View Details",
      color: "blue"
    },
    {
      icon: <FaCertificate className="text-blue-500 text-2xl" />,
      title: "Social Media Marketing Specialist",
      description: "Master advanced social media strategy, engaging content creation, targeted advertising, and insightful analytics across all major platforms..",
      actionText: "View Details",
      color: "blue"
    },
    {
      icon: <FaHandshake className="text-blue-500 text-2xl" />,
      title: "Google Ads & Analytics Masterclass",
      description: "Learn to create, manage, and optimize Google Ads campaigns and leverage Google Analytics for data-driven decisions.",
      actionText: "View Details",
      color: "blue"
    }
  ];
  
  const benefits = [
    "Expert Instructors: Learn from professionals with years of industry experience.",
    "Practical Curriculum: Focus on real-world scenarios and actionable strategies.",
    "Certification: Receive a recognized certification upon course completion.",
    "Career Support: Guidance and insights to help you land your dream digital marketing role.",
    "Community Access: Join a vibrant community of learners and professionals."
  ];
  
  const testimonials = [
    {
      id: 1,
      quote: "Sownmark's comprehensive digital marketing course transformed my career. The practical approach gave me the confidence to apply what I learned immediately.",
      name: "Sarah Johnson",
      role: "Digital Marketing Manager"
    },
    {
      id: 2,
      quote: "The instructors at Sownmark are industry experts who genuinely care about student success. I landed my dream job within a month of completing the program!",
      name: "Michael Chen",
      role: "SEO Specialist"
    },
    {
      id: 3,
      quote: "The hands-on projects and real-world case studies made all the difference. I went from knowing nothing about digital marketing to leading campaigns in just 3 months.",
      name: "Priya Patel",
      role: "Social Media Strategist"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div className="order-2 md:order-1">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-900 mb-4 leading-tight">
        Master Digital Marketing with Sownmark
      </h1>
      <p className="text-lg md:text-xl text-slate-700 mb-6">
        From foundational concepts to advanced strategies, our courses equip you with the skills to excel in the digital landscape.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
          Explore Courses
        </button> */}
        {/* <button className="bg-white hover:bg-gray-50 text-cyan-700 border border-cyan-700 font-medium py-3 px-6 rounded-lg transition duration-300">
          Free Consultation
        </button> */}
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center md:justify-end order-1 md:order-2">
      <img
        src={heroImg}
        alt="Digital Marketing Illustration"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-xl"
      />
    </div>

  </div>
</section>


      {/* Teaching Philosophy */}
      <section className="py-12 px-4 bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-8 text-center">
            Our Teaching Philosophy
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <p className="text-lg text-slate-800 mb-4">
              At Sownmark, we believe in practical, hands-on learning. Our curriculum is designed by seasoned digital marketing professionals, ensuring you gain relevant, up-to-date knowledge and actionable skills you can apply immediately.
            </p>
            <p className="text-lg text-slate-800">
              We focus on real-world case studies and project-based learning to solidify your understanding and prepare you for success in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white-900 mb-8 text-center">
            Choose Your Path to Digital Mastery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{course.title}</h3>
                  <p className="text-slate-600 mb-5">{course.description}</p>
                  <button className={`text-${course.color}-600 hover:text-${course.color}-800 font-medium flex items-center`}>
                    {course.actionText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Choose Sownmark for Your Digital Marketing Education?
          </h2>
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-8 text-center">
            Success Stories from Our Learners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our digital marketing programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-white text-cyan-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition duration-300">
              Request Syllabus
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;