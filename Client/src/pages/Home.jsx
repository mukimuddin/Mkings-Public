import { motion } from 'framer-motion';
import Button from '../components/Button';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <HeroSection />
      {/* Other sections will be added here */}
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