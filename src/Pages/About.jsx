import React, { useState, useEffect } from 'react';
import { Check, TrendingUp, Users, Shield, Target, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(prev => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slideUp">
              Our Journey in Agricultural Excellence
            </h1>
            <p className="text-xl text-gray-600 animate-slideUp delay-200">
              Since our inception, Pratisol has been committed to revolutionizing agricultural trade 
              through innovation, transparency, and unwavering quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-20 bg-white">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isVisible['vision-mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 gap-12">
            <VisionMissionCard
              title="Our Vision"
              description="To become India's most trusted agricultural trading platform, fostering sustainable partnerships and empowering farmers through technology and transparency."
              icon={<Target className="w-12 h-12 text-green-600" />}
            />
            <VisionMissionCard
              title="Our Mission"
              description="To create a seamless ecosystem that connects farmers, traders, and buyers while ensuring quality, fair pricing, and efficient delivery of agricultural products."
              icon={<TrendingUp className="w-12 h-12 text-green-600" />}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-green-50">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <ValueCard key={index} {...value} delay={`delay-${index * 100}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isVisible.story ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Story
            </h2>
            <div className="space-y-8">
              <TimelineItem
                year="2020"
                title="The Beginning"
                description="Founded with a vision to bridge the gap between agricultural producers and buyers through technology."
              />
              <TimelineItem
                year="2021"
                title="Market Expansion"
                description="Established partnerships with major APMC markets across Maharashtra and Gujarat."
              />
              <TimelineItem
                year="2022"
                title="Digital Innovation"
                description="Launched our proprietary quality assessment and trading platform."
              />
              <TimelineItem
                year="2023"
                title="Pan-India Presence"
                description="Expanded operations to 12 states, connecting over 500 farmers with premium buyers."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievements" className="py-20 bg-green-50">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isVisible.achievements ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} delay={`delay-${index * 100}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section id="quality" className="py-20 bg-white">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isVisible.quality ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Commitment to Quality
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              At Pratisol, quality isn't just a promise – it's our foundation. Our comprehensive 
              quality assurance process ensures that every product meets the highest standards.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {qualityCommitments.map((commitment, index) => (
                <QualityCard key={index} {...commitment} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const VisionMissionCard = ({ title, description, icon }) => (
  <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ValueCard = ({ icon, title, description, delay }) => (
  <div className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${delay}`}>
    <div className="mb-4 text-green-600">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TimelineItem = ({ year, title, description }) => (
  <div className="flex gap-6">
    <div className="text-2xl font-bold text-green-600 whitespace-nowrap">{year}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const AchievementCard = ({ icon, title, description, delay }) => (
  <div className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${delay}`}>
    <div className="mb-4 text-green-600">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const QualityCard = ({ title, points }) => (
  <div className="p-6 bg-green-50 rounded-lg">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <Check className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const coreValues = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Transparency",
    description: "Building lasting relationships through honest practices and clear communication."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Excellence",
    description: "Maintaining rigorous standards in every aspect of our operations."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Farmer Empowerment",
    description: "Supporting agricultural communities through fair practices and technology."
  }
];

const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Best Agri-Tech Platform 2023",
    description: "Recognized for innovative solutions in agricultural trading."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "500+ Farmer Network",
    description: "Built a thriving community of certified agricultural producers."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "ISO 9001:2015 Certified",
    description: "Internationally recognized for quality management systems."
  }
];

const qualityCommitments = [
  {
    title: "Quality Assurance Process",
    points: [
      "Multi-stage quality testing protocol",
      "Advanced laboratory testing facilities",
      "Experienced quality control team"
    ]
  },
  {
    title: "Certification & Standards",
    points: [
      "ISO 9001:2015 certified processes",
      "FSSAI compliance",
      "Regular third-party audits"
    ]
  }
];

export default About;