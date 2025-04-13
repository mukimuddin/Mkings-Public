import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import StandardSection from '../components/StandardSection';
import ContactForm from '../components/ContactForm';
import { animations } from '../styles/theme';

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    details: ['123 Business Street', 'Tech Hub, Innovation City', 'Country']
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
  },
  {
    icon: '✉️',
    title: 'Email Us',
    details: ['info@mkings.com', 'support@mkings.com']
  },
  {
    icon: '⏰',
    title: 'Business Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed']
  }
];

const Contact = () => {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with our team"
      backgroundImage="/images/contact-hero.jpg"
    >
      {/* Contact Information */}
      <StandardSection
        title="Get in Touch"
        subtitle="We'd love to hear from you"
        className="bg-[#0F0F0F]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={animations.fadeInUp}
              className="text-center p-6 bg-[#1A1A1A] rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold mb-4 gradient-text">{info.title}</h3>
              <ul className="space-y-2">
                {info.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-400">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </StandardSection>

      {/* Map Section */}
      <StandardSection
        background="#1A1A1A"
        withGradient
      >
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-123.456789!3d12.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDEyJzM0LjUiTiAxMjPCsDI3JzM0LjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </StandardSection>

      {/* FAQ CTA Section */}
      <StandardSection
        background="#0F0F0F"
        withGradient
        gradientDirection="to bottom right"
        gradientColors={['#FF4500', '#FFD700']}
      >
        <div className="text-center">
          <motion.h2
            variants={animations.fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Have More Questions?
          </motion.h2>
          <motion.p
            variants={animations.fadeInUp}
            className="text-xl text-gray-300 mb-8"
          >
            Check out our frequently asked questions
          </motion.p>
          <motion.a
            variants={animations.fadeInUp}
            href="/faq"
            className="inline-block px-8 py-4 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            View FAQ
          </motion.a>
        </div>
      </StandardSection>
    </PageLayout>
  );
};

export default Contact; 