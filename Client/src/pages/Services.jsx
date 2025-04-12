import { motion } from 'framer-motion';
import Button from '../components/Button';
import SubHeroSection from '../components/SubHeroSection';

const Services = () => {
  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <SubHeroSection
        title="Our Services"
        description="Innovative solutions tailored to transform your digital presence and drive business growth"
      />

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-black to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10 hover:border-yellow-500/50 transition-colors"
              >
                <div className="text-yellow-500 mb-4 text-3xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-black/50 backdrop-blur-lg rounded-lg p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-red-900/10 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Pricing Plans
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-black/50 backdrop-blur-lg rounded-lg p-8 border ${
                  plan.featured ? 'border-yellow-500' : 'border-white/10'
                } relative overflow-hidden`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Contact us for a tailored solution that perfectly fits your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="primary">Contact Us</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Sample main services data
const mainServices = [
  {
    icon: '💻',
    title: 'Software & Tech Services',
    description: 'Cutting-edge software solutions for modern businesses.',
    features: [
      'Custom Software Development',
      'Web & Mobile Applications',
      'Cloud Solutions',
      'API Integration',
      'Legacy System Modernization'
    ]
  },
  {
    icon: '🎨',
    title: 'Art & Design Services',
    description: 'Creative design services that bring your brand vision to life.',
    features: [
      'UI/UX Design',
      'Brand Identity',
      'Graphic Design',
      '3D Modeling & Animation',
      'Motion Graphics'
    ]
  },
  {
    icon: '✈️',
    title: 'Travel & Tours',
    description: 'Exclusive travel experiences and professional tour management.',
    features: [
      'Custom Travel Packages',
      'Corporate Travel Management',
      'Luxury Tours',
      'Adventure Travel',
      'Cultural Experiences'
    ]
  },
  {
    icon: '💡',
    title: 'Business & IT Solutions',
    description: 'Strategic consulting and IT solutions for business growth.',
    features: [
      'Business Process Optimization',
      'IT Infrastructure Setup',
      'Cybersecurity Solutions',
      'Data Analytics',
      'Digital Transformation'
    ]
  },
  {
    icon: '🛍️',
    title: 'E-commerce Solutions',
    description: 'Premium digital products and e-commerce solutions.',
    features: [
      'Online Store Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Customer Relationship Management',
      'Marketing Automation'
    ]
  },
  {
    icon: '📚',
    title: 'Online Courses',
    description: 'Professional skill development and educational content.',
    features: [
      'Custom Learning Platforms',
      'Interactive Course Content',
      'Progress Tracking',
      'Certification Programs',
      'Corporate Training'
    ]
  }
];

// Sample process data
const process = [
  {
    title: 'Discovery',
    description: 'We analyze your requirements and understand your business goals.'
  },
  {
    title: 'Planning',
    description: 'We develop a strategic plan tailored to your specific needs.'
  },
  {
    title: 'Execution',
    description: 'Our team implements the solution with precision and expertise.'
  },
  {
    title: 'Delivery',
    description: 'We deliver the final product and ensure your complete satisfaction.'
  }
];

// Sample pricing plans
const pricingPlans = [
  {
    name: 'Starter',
    price: '499',
    features: [
      'Basic Website Development',
      '5 Pages',
      'Responsive Design',
      'Basic SEO',
      '3 Months Support'
    ]
  },
  {
    name: 'Professional',
    price: '999',
    featured: true,
    features: [
      'Advanced Website Development',
      '10 Pages',
      'Responsive Design',
      'Advanced SEO',
      'E-commerce Integration',
      '6 Months Support',
      'Monthly Analytics Report'
    ]
  },
  {
    name: 'Enterprise',
    price: '1999',
    features: [
      'Custom Solution Development',
      'Unlimited Pages',
      'Responsive Design',
      'Premium SEO',
      'Advanced E-commerce',
      '12 Months Support',
      'Weekly Analytics Report',
      'Priority Support'
    ]
  }
];

export default Services; 