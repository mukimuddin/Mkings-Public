import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SubHeroSection from '../components/SubHeroSection';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development',
      category: 'programming',
      price: 99.99,
      rating: 4.8,
      students: 15000,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      instructor: 'John Smith',
      duration: '40 hours'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      category: 'design',
      price: 89.99,
      rating: 4.7,
      students: 8500,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      instructor: 'Sarah Johnson',
      duration: '35 hours'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      category: 'marketing',
      price: 79.99,
      rating: 4.6,
      students: 12000,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      instructor: 'Mike Wilson',
      duration: '30 hours'
    },
    {
      id: 4,
      title: 'Business Leadership',
      category: 'business',
      price: 129.99,
      rating: 4.9,
      students: 5000,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      instructor: 'Emily Brown',
      duration: '45 hours'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'programming',
      price: 109.99,
      rating: 4.7,
      students: 9000,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      instructor: 'David Clark',
      duration: '38 hours'
    },
    {
      id: 6,
      title: 'Graphic Design Fundamentals',
      category: 'design',
      price: 69.99,
      rating: 4.5,
      students: 7500,
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9',
      instructor: 'Lisa Anderson',
      duration: '25 hours'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <SubHeroSection
        title="Our Courses"
        description="Elevate your skills with our expert-led professional development courses"
      />

      {/* Courses Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${course.price}</span>
                    <Button variant="primary">Enroll Now</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="mb-6">
              Contact us to request a custom course tailored to your needs
            </p>
            <Button variant="primary">
              Request Custom Course
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses; 