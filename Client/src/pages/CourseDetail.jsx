import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const CourseDetail = () => {
  const { id } = useParams();

  // This would typically come from an API, but for now we'll use static data
  const courses = {
    1: {
      title: 'Complete Web Development',
      category: 'programming',
      price: 99.99,
      rating: 4.8,
      students: 15000,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      instructor: 'John Smith',
      duration: '40 hours',
      description: 'Master web development from scratch with this comprehensive course. Learn HTML, CSS, JavaScript, React, Node.js, and more.',
      topics: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript ES6+',
        'React.js Frontend Development',
        'Node.js Backend Development',
        'Database Management with MongoDB',
        'RESTful API Development',
        'Authentication & Authorization',
        'Deployment & Hosting'
      ],
      requirements: [
        'Basic computer knowledge',
        'No prior programming experience needed',
        'Willingness to learn and practice'
      ],
      whatYoullLearn: [
        'Build responsive websites',
        'Create full-stack applications',
        'Work with modern frameworks',
        'Implement user authentication',
        'Deploy applications to production'
      ]
    },
    2: {
      title: 'UI/UX Design Masterclass',
      category: 'design',
      price: 89.99,
      rating: 4.7,
      students: 8500,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      instructor: 'Sarah Johnson',
      duration: '35 hours',
      description: 'Learn to create beautiful and functional user interfaces. Master the principles of UX design and modern UI tools.',
      topics: [
        'Design Principles',
        'User Research',
        'Wireframing & Prototyping',
        'Figma Mastery',
        'Design Systems',
        'User Testing',
        'Visual Design',
        'Design Psychology'
      ],
      requirements: [
        'No prior design experience needed',
        'Access to Figma (free)',
        'Interest in creative work'
      ],
      whatYoullLearn: [
        'Create user-centered designs',
        'Build interactive prototypes',
        'Conduct user research',
        'Design mobile & web interfaces',
        'Create design systems'
      ]
    },
    3: {
      title: 'Digital Marketing Strategy',
      category: 'marketing',
      price: 79.99,
      rating: 4.6,
      students: 12000,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      instructor: 'Mike Wilson',
      duration: '30 hours',
      description: 'Master digital marketing strategies to grow your business online. Learn SEO, social media, email marketing, and more.',
      topics: [
        'SEO Fundamentals',
        'Social Media Marketing',
        'Email Marketing',
        'Content Strategy',
        'PPC Advertising',
        'Analytics & Tracking',
        'Conversion Optimization',
        'Marketing Automation'
      ],
      requirements: [
        'Basic marketing knowledge',
        'Social media familiarity',
        'Google account'
      ],
      whatYoullLearn: [
        'Create marketing strategies',
        'Optimize for search engines',
        'Run social media campaigns',
        'Analyze marketing data',
        'Improve conversion rates'
      ]
    },
    4: {
      title: 'Business Leadership',
      category: 'business',
      price: 129.99,
      rating: 4.9,
      students: 5000,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      instructor: 'Emily Brown',
      duration: '45 hours',
      description: 'Develop essential leadership skills for the modern business world. Learn management, strategy, and team building.',
      topics: [
        'Leadership Principles',
        'Team Management',
        'Strategic Planning',
        'Decision Making',
        'Change Management',
        'Conflict Resolution',
        'Communication Skills',
        'Performance Management'
      ],
      requirements: [
        'Some business experience',
        'Management interest',
        'Team collaboration experience'
      ],
      whatYoullLearn: [
        'Lead teams effectively',
        'Develop business strategies',
        'Manage organizational change',
        'Improve decision making',
        'Build high-performing teams'
      ]
    },
    5: {
      title: 'Mobile App Development',
      category: 'programming',
      price: 109.99,
      rating: 4.7,
      students: 9000,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      instructor: 'David Clark',
      duration: '38 hours',
      description: 'Learn to build native mobile applications for iOS and Android using React Native and modern development tools.',
      topics: [
        'React Native Basics',
        'Mobile UI Development',
        'App State Management',
        'Native Device Features',
        'API Integration',
        'App Publishing',
        'Performance Optimization',
        'Testing & Debugging'
      ],
      requirements: [
        'JavaScript knowledge',
        'React basics',
        'Mobile development interest'
      ],
      whatYoullLearn: [
        'Build mobile applications',
        'Create native interfaces',
        'Handle app state',
        'Integrate device features',
        'Deploy to app stores'
      ]
    },
    6: {
      title: 'Graphic Design Fundamentals',
      category: 'design',
      price: 69.99,
      rating: 4.5,
      students: 7500,
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9',
      instructor: 'Lisa Anderson',
      duration: '25 hours',
      description: 'Master the fundamentals of graphic design. Learn color theory, typography, layout design, and industry-standard tools.',
      topics: [
        'Design Principles',
        'Color Theory',
        'Typography',
        'Layout Design',
        'Adobe Creative Suite',
        'Brand Design',
        'Print Design',
        'Digital Design'
      ],
      requirements: [
        'No prior design experience',
        'Adobe Creative Suite access',
        'Creative interest'
      ],
      whatYoullLearn: [
        'Create professional designs',
        'Work with typography',
        'Design for print & digital',
        'Build brand identities',
        'Master design tools'
      ]
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl text-center">Course not found</h1>
        </div>
      </div>
    );
  }

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  {course.title}
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>{course.rating}</span>
                </div>
                <div className="text-gray-400">•</div>
                <div>{course.students.toLocaleString()} students</div>
                <div className="text-gray-400">•</div>
                <div>{course.duration}</div>
              </div>
              <div className="flex items-center mb-8">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{course.instructor}</p>
                  <p className="text-gray-400">Course Instructor</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="primary" className="flex-1">
                  Enroll Now - ${course.price}
                </Button>
                <Button variant="secondary" className="flex-1">
                  Try Free Preview
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYoullLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Course Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Course Content</h2>
                <div className="space-y-4">
                  {course.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                    >
                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4">
                          {index + 1}
                        </span>
                        <span>{topic}</span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-3 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10 sticky top-24"
              >
                <h3 className="text-2xl font-bold mb-6">Course Features</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lectures</span>
                    <span>{course.topics.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Students</span>
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category</span>
                    <span className="capitalize">{course.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rating</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <Button variant="primary" className="w-full mb-4">
                      Enroll Now - ${course.price}
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail; 