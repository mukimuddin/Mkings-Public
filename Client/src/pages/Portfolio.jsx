import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import SubHeroSection from '../components/SubHeroSection';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <SubHeroSection
        title="Our Portfolio"
        description="Explore our collection of successful projects and creative solutions"
      />

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white'
                    : 'bg-black/50 text-gray-300 hover:text-white border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-lg border border-white/10"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/90 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                    <ul className="space-y-2">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="primary">View Live Project</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Let's create something amazing together. Contact us to discuss your project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="primary">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Sample filters
const filters = ['all', 'web', 'mobile', 'design', 'branding', 'marketing'];

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    fullDescription: 'A comprehensive e-commerce platform built with modern technologies, featuring advanced product management, secure payment processing, and real-time inventory tracking.',
    details: [
      'Custom product catalog management',
      'Secure payment gateway integration',
      'Real-time inventory tracking',
      'Advanced search and filtering',
      'Customer review system'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe', 'AWS']
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    fullDescription: 'A feature-rich mobile banking application that provides secure and convenient banking services to users on the go.',
    details: [
      'Biometric authentication',
      'Real-time transaction tracking',
      'Bill payments and transfers',
      'Investment portfolio management',
      'Secure messaging system'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'AWS', 'Socket.io']
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    description: 'Complete brand identity for a tech startup',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    tags: ['Branding', 'Logo Design', 'Typography'],
    fullDescription: 'A comprehensive brand identity design project that established a strong visual presence for a growing tech startup.',
    details: [
      'Logo and wordmark design',
      'Color palette development',
      'Typography system',
      'Brand guidelines',
      'Marketing collateral'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'After Effects']
  },
  {
    id: 4,
    title: 'Digital Marketing Campaign',
    description: 'Successful social media marketing campaign',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    tags: ['Social Media', 'Content Strategy', 'Analytics'],
    fullDescription: 'A comprehensive digital marketing campaign that significantly increased brand awareness and customer engagement.',
    details: [
      'Social media strategy development',
      'Content creation and scheduling',
      'Influencer partnerships',
      'Performance analytics',
      'ROI tracking'
    ],
    technologies: ['Facebook Ads', 'Instagram', 'Google Analytics', 'HubSpot', 'Mailchimp']
  },
  {
    id: 5,
    title: 'Corporate Website',
    description: 'Modern and responsive corporate website',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    tags: ['React', 'Tailwind CSS', 'GSAP'],
    fullDescription: 'A modern and responsive corporate website that effectively communicates the brand message and showcases company services.',
    details: [
      'Responsive design',
      'Interactive animations',
      'Content management system',
      'SEO optimization',
      'Performance optimization'
    ],
    technologies: ['React', 'Tailwind CSS', 'GSAP', 'WordPress', 'Cloudflare']
  },
  {
    id: 6,
    title: 'Product Branding',
    description: 'Complete product branding and packaging design',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Packaging', 'Brand Strategy', 'Visual Identity'],
    fullDescription: 'A comprehensive product branding project that created a distinctive and memorable brand identity for a consumer product.',
    details: [
      'Brand strategy development',
      'Visual identity design',
      'Packaging design',
      'Marketing materials',
      'Brand guidelines'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', '3D Modeling', 'Print Production']
  }
];

export default Portfolio; 