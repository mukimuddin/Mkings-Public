import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import StandardSection from '../components/StandardSection';
import FAQItem from '../components/FAQItem';
import { animations } from '../styles/theme';

const faqItems = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and business consulting. Our team specializes in creating custom solutions tailored to your specific needs.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we\'ll provide a detailed timeline based on your specific requirements.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing options based on project scope and requirements. Our basic packages start at $999, with custom solutions available for more complex projects. We provide detailed quotes after understanding your specific needs during the consultation.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer various support and maintenance packages. Our basic plans include 1 month of support, while premium packages offer extended support periods. We also provide custom support solutions based on your needs.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Node.js, Python, and various cloud services. Our tech stack is chosen based on project requirements to ensure optimal performance and scalability.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain clear communication through regular meetings, progress reports, and dedicated project management tools. You\'ll have a direct line to your project manager and regular updates on project milestones.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we specialize in creating custom solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop solutions that align with your goals.'
  },
  {
    question: 'What is your revision policy?',
    answer: 'Our packages include a specified number of revision rounds. Basic packages include 2 rounds of revisions, while premium packages offer unlimited revisions during the development phase.'
  }
];

const FAQ = () => {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our services"
      backgroundImage="/images/faq-hero.jpg"
    >
      {/* FAQ Section */}
      <StandardSection
        title="Common Questions"
        subtitle="Everything you need to know about our services"
        className="bg-[#0F0F0F]"
      >
        <div className="max-w-3xl mx-auto divide-y divide-gray-800">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </StandardSection>

      {/* Contact CTA Section */}
      <StandardSection
        background="#1A1A1A"
        withGradient
        gradientDirection="to bottom right"
        gradientColors={['#FF4500', '#FFD700']}
      >
        <div className="text-center">
          <motion.h2
            variants={animations.fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            variants={animations.fadeInUp}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us for more information about our services
          </motion.p>
          <motion.a
            variants={animations.fadeInUp}
            href="/contact"
            className="inline-block px-8 py-4 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </motion.a>
        </div>
      </StandardSection>
    </PageLayout>
  );
};

export default FAQ; 