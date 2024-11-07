import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Clock,
  Globe,
  Users,
  Target,
  CheckCircle2
} from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      bio: "20+ years of experience in agricultural supply chain management",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Priya Sharma",
      position: "Chief Operations Officer",
      bio: "Former head of procurement at leading agricultural corporation",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Amit Patel",
      position: "Head of Quality Assurance",
      bio: "Expert in agricultural quality control and certification",
      image: "/api/placeholder/300/300"
    }
  ];

  const teamMembers = [
    {
      name: "Suresh Kumar",
      position: "Regional Manager - North",
      image: "/api/placeholder/250/250"
    },
    {
      name: "Meena Reddy",
      position: "Regional Manager - South",
      image: "/api/placeholder/250/250"
    },
    {
      name: "Ankit Shah",
      position: "Technology Lead",
      image: "/api/placeholder/250/250"
    },
    {
      name: "Neha Gupta",
      position: "Customer Relations Head",
      image: "/api/placeholder/250/250"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-green-50 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-600">
              Meet the experts behind Pratisol's success
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-green-600 mb-2">{leader.position}</p>
                <p className="text-gray-600">{leader.bio}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Regional Leaders
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;