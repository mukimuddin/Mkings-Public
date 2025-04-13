import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import StandardSection from '../components/StandardSection';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import PricingCard from '../components/PricingCard';
import { animations } from '../styles/theme';

const mainServices = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies.',
    icon: '🌐',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning']
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    features: ['iOS Development', 'Android Development', 'Cross-platform Solutions']
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    icon: '🎨',
    features: ['User Research', 'Wireframing', 'Prototyping']
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business.',
    icon: '📈',
    features: ['SEO', 'Social Media', 'Content Marketing']
  }
];

const process = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Understanding your needs and project requirements'
  },
  {
    step: 2,
    title: 'Planning',
    description: 'Creating detailed project roadmap and timeline'
  },
  {
    step: 3,
    title: 'Development',
    description: 'Building your solution with best practices'
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Thorough testing and quality assurance'
  },
  {
    step: 5,
    title: 'Launch',
    description: 'Deploying and monitoring your solution'
  }
];

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small projects',
    price: 999,
    period: 'project',
    features: [
      'Custom Design',
      'Responsive Development',
      'Basic SEO',
      '2 Revisions',
      '1 Month Support'
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 2499,
    period: 'project',
    features: [
      'Advanced Design',
      'Responsive Development',
      'Advanced SEO',
      'Unlimited Revisions',
      '3 Months Support',
      'Performance Optimization'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications',
    price: 4999,
    period: 'project',
    features: [
      'Premium Design',
      'Full-Stack Development',
      'Advanced SEO & Analytics',
      'Unlimited Revisions',
      '6 Months Support',
      'Performance Optimization',
      'Security Hardening'
    ]
  }
];

const Services = () => {
  return (
    <PageLayout
      title="Our Services"
      subtitle="Comprehensive solutions for your digital needs"
      backgroundImage="/images/services-hero.jpg"
    >
      {/* Services Section */}
      <StandardSection
        title="What We Offer"
        subtitle="Explore our range of professional services"
        className="bg-[#0F0F0F]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </StandardSection>

      {/* Process Section */}
      <StandardSection
        title="Our Process"
        subtitle="How we bring your vision to life"
        background="#1A1A1A"
        withGradient
      >
        <div className="max-w-3xl mx-auto space-y-12">
          {process.map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              isLast={index === process.length - 1}
            />
          ))}
        </div>
      </StandardSection>

      {/* Pricing Section */}
      <StandardSection
        title="Pricing Plans"
        subtitle="Transparent pricing for your needs"
        className="bg-[#0F0F0F]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isPopular={index === 1}
            />
          ))}
        </div>
      </StandardSection>

      {/* CTA Section */}
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            variants={animations.fadeInUp}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how we can help you achieve your goals
          </motion.p>
          <motion.a
            variants={animations.fadeInUp}
            href="/contact"
            className="inline-block px-8 py-4 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>
      </StandardSection>
    </PageLayout>
  );
};

export default Services; 