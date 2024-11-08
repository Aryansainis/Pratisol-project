// import React, { useState } from 'react';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   Send, 
//   Building,
//   MessageCircle,
//   Check
// } from 'lucide-react';

// const Contact = () => {
//   const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setFormStatus({ 
//       submitted: true, 
//       message: 'Thank you for your message. We will get back to you soon!' 
//     });
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     });
//     setTimeout(() => {
//       setFormStatus({ submitted: false, message: '' });
//     }, 5000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] flex items-center bg-gradient-to-br from-green-50 to-green-100">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl animate-fadeIn">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slideUp">
//               Get in Touch
//             </h1>
//             <p className="text-xl text-gray-600 animate-slideUp delay-200">
//               Have questions about our services? We're here to help and would love to hear from you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-12">
//             {/* Contact Information */}
//             <div className="md:col-span-1 space-y-8">
//               <div className="bg-green-50 p-6 rounded-lg">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-6">
//                   <ContactInfoItem 
//                     icon={<Building />}
//                     title="Office Address"
//                     content={[
//                       "123 Agri Complex",
//                       "Mumbai Central",
//                       "Mumbai, Maharashtra - 400001"
//                     ]}
//                   />
//                   <ContactInfoItem 
//                     icon={<Phone />}
//                     title="Phone Numbers"
//                     content={[
//                       "+91 22 1234 5678",
//                       "+91 98765 43210"
//                     ]}
//                   />
//                   <ContactInfoItem 
//                     icon={<Mail />}
//                     title="Email"
//                     content={[
//                       "info@pratisol.com",
//                       "support@pratisol.com"
//                     ]}
//                   />
//                   <ContactInfoItem 
//                     icon={<Clock />}
//                     title="Business Hours"
//                     content={[
//                       "Monday - Friday: 9:00 AM - 6:00 PM",
//                       "Saturday: 9:00 AM - 2:00 PM",
//                       "Sunday: Closed"
//                     ]}
//                   />
//                 </div>
//               </div>

//               {/* Quick Contact Buttons */}
//               <div className="space-y-4">
//                 <QuickContactButton 
//                   icon={<Phone />}
//                   text="Call Us Now"
//                   subtext="+91 22 1234 5678"
//                 />
//                 <QuickContactButton 
//                   icon={<MessageCircle />}
//                   text="Live Chat"
//                   subtext="Available 9 AM - 6 PM"
//                 />
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="md:col-span-2">
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                   Send us a Message
//                 </h3>
//                 {formStatus.submitted ? (
//                   <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
//                     <div className="flex items-center">
//                       <Check className="w-5 h-5 mr-2" />
//                       {formStatus.message}
//                     </div>
//                   </div>
//                 ) : null}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <FormInput
//                       label="Your Name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                     <FormInput
//                       label="Email Address"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <FormInput
//                       label="Phone Number"
//                       name="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                     <FormInput
//                       label="Subject"
//                       name="subject"
//                       type="text"
//                       required
//                       value={formData.subject}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2">Message</label>
//                     <textarea
//                       name="message"
//                       rows="5"
//                       required
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="How can we help you?"
//                     ></textarea>
//                   </div>
//                   <button
//                     type="submit"
//                     className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
//                   >
//                     <Send className="w-5 h-5 mr-2" />
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Our Location
//           </h2>
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             {/* Placeholder for map - in a real implementation, you'd integrate with Google Maps or similar */}
//             <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
//               <MapPin className="w-12 h-12 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Frequently Asked Questions
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {faqs.map((faq, index) => (
//               <FAQCard key={index} {...faq} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// const ContactInfoItem = ({ icon, title, content }) => (
//   <div className="flex space-x-4">
//     <div className="text-green-600">
//       {icon}
//     </div>
//     <div>
//       <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
//       {content.map((item, index) => (
//         <p key={index} className="text-gray-600">{item}</p>
//       ))}
//     </div>
//   </div>
// );

// const QuickContactButton = ({ icon, text, subtext }) => (
//   <button className="w-full bg-white hover:bg-green-50 border border-gray-200 p-4 rounded-lg transition-colors duration-300 flex items-center space-x-4">
//     <div className="text-green-600">
//       {icon}
//     </div>
//     <div className="text-left">
//       <div className="font-semibold text-gray-800">{text}</div>
//       <div className="text-sm text-gray-600">{subtext}</div>
//     </div>
//   </button>
// );

// const FormInput = ({ label, name, type, required, value, onChange }) => (
//   <div>
//     <label className="block text-gray-700 mb-2">{label}</label>
//     <input
//       type={type}
//       name={name}
//       required={required}
//       value={value}
//       onChange={onChange}
//       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//     />
//   </div>
// );

// const FAQCard = ({ question, answer }) => (
//   <div className="bg-green-50 p-6 rounded-lg">
//     <h4 className="text-lg font-semibold text-gray-800 mb-3">{question}</h4>
//     <p className="text-gray-600">{answer}</p>
//   </div>
// );

// const faqs = [
//   {
//     question: "What types of agricultural products do you trade?",
//     answer: "We trade a wide range of agricultural commodities including grains, pulses, oilseeds, and spices, all sourced directly from certified farmers."
//   },
//   {
//     question: "How do you ensure product quality?",
//     answer: "We implement rigorous quality control measures including laboratory testing, visual inspection, and moisture content analysis at every stage."
//   },
//   {
//     question: "What are your payment terms?",
//     answer: "We offer flexible payment terms including LC, advance payment, and other standard industry payment methods."
//   },
//   {
//     question: "Do you provide shipping services?",
//     answer: "Yes, we arrange end-to-end logistics solutions including transportation and warehousing services."
//   }
// ];

// export default Contact;


import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building,
  MessageCircle,
  Check
} from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slideUp">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 animate-slideUp delay-200">
              Have questions about our services? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <ContactInfoItem 
                    icon={<Building />}
                    title="Office Address"
                    content={[
                      "123 Agri Complex",
                      "Mumbai Central",
                      "Mumbai, Maharashtra - 400001"
                    ]}
                  />
                  <ContactInfoItem 
                    icon={<Phone />}
                    title="Phone Numbers"
                    content={[
                      "+91 22 1234 5678",
                      "+91 98765 43210"
                    ]}
                  />
                  <ContactInfoItem 
                    icon={<Mail />}
                    title="Email"
                    content={[
                      "info@pratisol.com",
                      "support@pratisol.com"
                    ]}
                  />
                  <ContactInfoItem 
                    icon={<Clock />}
                    title="Business Hours"
                    content={[
                      "Monday - Friday: 9:00 AM - 6:00 PM",
                      "Saturday: 9:00 AM - 2:00 PM",
                      "Sunday: Closed"
                    ]}
                  />
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <QuickContactButton 
                  icon={<Phone />}
                  text="Call Us Now"
                  subtext="+91 22 1234 5678"
                />
                <QuickContactButton 
                  icon={<MessageCircle />}
                  text="Live Chat"
                  subtext="Available 9 AM - 6 PM"
                />
              </div>
            </div>

            {/* Zoho Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Send us a Message
                </h3>
                <div className="responsive-container">
                  <iframe 
                    aria-label="Send us a message"
                    frameBorder="0"
                    style={{ height: "500px", width: "100%", border: "none" }}
                    src="https://forms.zohopublic.in/pratisol/form/PratisolWebsite/formperma/l7yrJViFxZzeB-Qb9Di67SFpdmWK9yuLyt9q9IkrrMk"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Location
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Placeholder for map - in a real implementation, you'd integrate with Google Maps or similar */}
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQCard key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex space-x-4">
    <div className="text-green-600">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      {content.map((item, index) => (
        <p key={index} className="text-gray-600">{item}</p>
      ))}
    </div>
  </div>
);

const QuickContactButton = ({ icon, text, subtext }) => (
  <button className="w-full bg-white hover:bg-green-50 border border-gray-200 p-4 rounded-lg transition-colors duration-300 flex items-center space-x-4">
    <div className="text-green-600">
      {icon}
    </div>
    <div className="text-left">
      <div className="font-semibold text-gray-800">{text}</div>
      <div className="text-sm text-gray-600">{subtext}</div>
    </div>
  </button>
);

const FAQCard = ({ question, answer }) => (
  <div className="bg-green-50 p-6 rounded-lg">
    <h4 className="text-lg font-semibold text-gray-800 mb-3">{question}</h4>
    <p className="text-gray-600">{answer}</p>
  </div>
);

const faqs = [
  {
    question: "What types of agricultural products do you trade?",
    answer: "We trade a wide range of agricultural commodities including grains, pulses, oilseeds, and spices, all sourced directly from certified farmers."
  },
  {
    question: "How do you ensure product quality?",
    answer: "We implement rigorous quality control measures including laboratory testing, visual inspection, and moisture content analysis at every stage."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment terms including LC, advance payment, and other standard industry payment methods."
  },
  {
    question: "Do you provide shipping services?",
    answer: "Yes, we arrange end-to-end logistics solutions including transportation and warehousing services."
  }
];

export default Contact;
