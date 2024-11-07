import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Check,
  Phone,
  MapPin,
  Star,
  Shield,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const HeroSection = () => {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
            >
              Bridging Agricultural Excellence
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Your trusted partner in procuring premium agricultural raw
              materials across India
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center">
              <Link to="/About">Learn More</Link> <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
              <Link to="/Contact">Contact Us</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  const FeaturesSection = () => {
    const features = [
      {
        icon: <Check className="h-8 w-8 text-green-600" />,
        title: 'Quality Assurance',
        description:
          'Rigorous quality control processes ensuring premium agricultural products',
      },
      {
        icon: <Phone className="h-8 w-8 text-green-600" />,
        title: '24/7 Support',
        description:
          'Round-the-clock assistance for all your procurement needs',
      },
      {
        icon: <MapPin className="h-8 w-8 text-green-600" />,
        title: 'Pan-India Network',
        description:
          'Extensive network of APMC partnerships across the country',
      },
    ];

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const QualityProcessSection = () => {
    const processes = [
      {
        icon: <Shield className="h-12 w-12 text-green-600" />,
        title: 'Rigorous Selection',
        description:
          'Careful selection of suppliers and thorough verification of source materials',
      },
      {
        icon: <Check className="h-12 w-12 text-green-600" />,
        title: 'Quality Testing',
        description:
          'Multi-stage quality testing process ensuring premium grade products',
      },
      {
        icon: <Award className="h-12 w-12 text-green-600" />,
        title: 'Certification',
        description:
          'Adherence to international quality standards and certifications',
      },
    ];

    return (
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Quality Assurance Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of quality through our
              comprehensive quality assurance process
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const TestimonialsSection = () => {
    const testimonials = [
      {
        name: 'Rajesh Kumar',
        position: 'Agricultural Cooperative Leader',
        content:
          'Pratisol has transformed how we source our agricultural materials. Their commitment to quality and transparency is unmatched.',
        rating: 5,
      },
      {
        name: 'Priya Sharma',
        position: 'Food Processing Manager',
        content:
          'Working with Pratisol has significantly improved our supply chain efficiency. Their quality assurance process gives us complete peace of mind.',
        rating: 5,
      },
      {
        name: 'Amit Patel',
        position: 'Farm Owner',
        content:
          'The team at Pratisol understands the agricultural sector deeply. Their support and expertise have been invaluable to our business.',
        rating: 5,
      },
    ];

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied
              clients
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const PartnersSection = () => {
    const partners = [
      'APMC Mumbai',
      'FCI',
      'Kisaan Cooperative',
      'AgriTech Solutions',
      'National Commodities Exchange',
      'Quality Control Board',
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Esteemed Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with some of the most respected
              organizations in the agriculture sector
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-700 font-semibold">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <QualityProcessSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
