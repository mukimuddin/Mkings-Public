import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including software development, web design, mobile app development, digital marketing, and consulting services. Our team specializes in creating custom solutions tailored to your specific business needs."
    },
    {
      question: "How can I get started with your services?",
      answer: "Getting started is easy! Simply contact us through our website or call our office. We'll schedule a consultation to discuss your requirements, provide a detailed proposal, and create a customized plan for your project."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support packages. Our team is available to handle updates, bug fixes, and provide technical support to ensure your solution runs smoothly."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically require a 30% deposit to begin work, with milestone-based payments throughout the project. Final payment is due upon project completion. We accept various payment methods including credit cards and bank transfers."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients worldwide. Our team is equipped to handle different time zones and can communicate effectively in multiple languages. We use various collaboration tools to ensure smooth remote working relationships."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, and various cloud platforms. Our tech stack is chosen based on project requirements to ensure optimal performance and scalability."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can help improve, maintain, or rebuild existing projects. Our team will analyze your current solution and provide recommendations for improvements or modernization."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-900/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,61,0,0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12"
          >
            Find answers to common questions about our services and processes
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left bg-black/50 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-red-500 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-300">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 