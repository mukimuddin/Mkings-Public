import React, { useState, useMemo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import StandardSection from '../components/StandardSection';
import { ImageWithFallback } from '../utils/imageOptimization.jsx';
import { theme, animations } from '../styles/theme';

// Lazy load components
const ProjectCard = lazy(() => import('../components/ProjectCard'));
const TestimonialCard = lazy(() => import('../components/TestimonialCard'));

const categories = ['All Projects', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://via.placeholder.com/800x450.png?text=E-commerce+Platform',
    description: 'Modern e-commerce platform with advanced features',
    link: '#',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Travel App',
    category: 'Mobile Apps',
    image: 'https://via.placeholder.com/800x450.png?text=Travel+App',
    description: 'User-friendly travel planning application',
    link: '#',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://via.placeholder.com/800x450.png?text=Brand+Identity',
    description: 'Complete brand identity design',
    link: '#',
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop']
  },
  {
    id: 4,
    title: 'Food Delivery UI',
    category: 'UI/UX Design',
    image: 'https://via.placeholder.com/800x450.png?text=Food+Delivery+UI',
    description: 'Intuitive food delivery app interface',
    link: '#',
    technologies: ['Figma', 'Adobe XD', 'Sketch']
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    category: 'Web Development',
    image: 'https://via.placeholder.com/800x450.png?text=Healthcare+Portal',
    description: 'Comprehensive healthcare management system',
    link: '#',
    technologies: ['Vue.js', 'Laravel', 'MySQL']
  },
  {
    id: 6,
    title: 'Fitness App',
    category: 'Mobile Apps',
    image: 'https://via.placeholder.com/800x450.png?text=Fitness+App',
    description: 'Personalized fitness tracking application',
    link: '#',
    technologies: ['Flutter', 'Firebase', 'GraphQL']
  }
];

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, TechCorp',
    image: 'https://via.placeholder.com/100x100.png?text=JS',
    text: 'Working with this team was an absolute pleasure. They delivered beyond our expectations.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Marketing Director, InnovateCo',
    image: 'https://via.placeholder.com/100x100.png?text=SJ',
    text: 'The attention to detail and commitment to quality is outstanding. Highly recommended!'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Founder, StartupX',
    image: 'https://via.placeholder.com/100x100.png?text=MB',
    text: 'They transformed our vision into reality with exceptional skill and professionalism.'
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      selectedCategory === 'All Projects' || project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <PageLayout
      title="Our Portfolio"
      subtitle="Showcasing our finest work and innovative solutions"
      backgroundImage="https://via.placeholder.com/1920x1080.png?text=Portfolio+Hero+Background"
    >
      {/* Category Filter */}
      <StandardSection
        title="Our Projects"
        subtitle="Explore our diverse portfolio of successful projects"
        className="bg-[#0F0F0F]"
      >
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-[#1A1A1A] hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={
            <div className="col-span-full flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          }>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Suspense>
        </div>
      </StandardSection>

      {/* Testimonials Section */}
      <StandardSection
        title="Client Testimonials"
        subtitle="What our clients say about our work"
        background="#1A1A1A"
        withGradient
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Suspense fallback={
            <div className="col-span-full flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          }>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Suspense>
        </div>
      </StandardSection>

      {/* CTA Section */}
      <StandardSection
        title="Ready to Start Your Project?"
        subtitle="Let's work together to bring your vision to life"
        background="#0F0F0F"
        withGradient
        gradientDirection="to bottom right"
        gradientColors={['#FF4500', '#FFD700']}
      >
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </StandardSection>
    </PageLayout>
  );
};

export default Portfolio; 