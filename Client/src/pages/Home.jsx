import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import HeroSection from '../components/HeroSection';
import StandardSection from '../components/StandardSection';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <HeroSection />
      
      {/* Services Section */}
      <StandardSection
        title="Our Services"
        subtitle="Comprehensive solutions for your digital needs"
        className="py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-lg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link to="/services" className="text-primary hover:underline">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/services" isLink>
            View All Services
          </Button>
        </div>
      </StandardSection>

      {/* Portfolio Preview */}
      <StandardSection
        title="Our Work"
        subtitle="Recent projects we're proud of"
        background="#1A1A1A"
        className="py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            className="bg-[#0F0F0F] p-6 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
            <p className="text-gray-400 mb-6">
              Check out some of our recent work and see how we've helped businesses transform their digital presence.
            </p>
            <Link to="/portfolio" className="text-primary hover:underline">
              View Portfolio →
            </Link>
          </motion.div>
          <motion.div
            className="bg-[#0F0F0F] p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Client Testimonials</h3>
            <p className="text-gray-400 mb-6">
              Hear from our satisfied clients about their experience working with us.
            </p>
            <Link to="/about" className="text-primary hover:underline">
              Read Testimonials →
            </Link>
          </motion.div>
        </div>
      </StandardSection>

      {/* CTA Section */}
      <StandardSection
        title="Ready to Get Started?"
        subtitle="Let's discuss how we can help your business grow"
        background="#0F0F0F"
        withGradient
        gradientDirection="to bottom right"
        gradientColors={['#FF4500', '#FFD700']}
        className="py-20"
      >
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          <Button to="/contact" isLink>
            Contact Us
          </Button>
          <Button to="/faq" isLink variant="outline">
            FAQ
          </Button>
        </div>
      </StandardSection>
    </main>
  );
};

// Sample services data
const services = [
  {
    icon: '💻',
    title: 'Software & Tech',
    description: 'Cutting-edge software solutions and technology services for modern businesses.'
  },
  {
    icon: '🎨',
    title: 'Art & Design',
    description: 'Creative design services that bring your brand vision to life.'
  },
  {
    icon: '✈️',
    title: 'Travel & Tours',
    description: 'Exclusive travel experiences and professional tour management.'
  },
  {
    icon: '💡',
    title: 'Business Solutions',
    description: 'Strategic consulting and IT solutions for business growth.'
  },
  {
    icon: '🛍️',
    title: 'Digital Products',
    description: 'Premium digital products and e-commerce solutions.'
  },
  {
    icon: '📚',
    title: 'Online Courses',
    description: 'Professional skill development and educational content.'
  }
];

export default Home; 