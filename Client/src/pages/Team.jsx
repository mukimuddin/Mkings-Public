import { motion } from 'framer-motion';
import Button from '../components/Button';
import SubHeroSection from '../components/SubHeroSection';

const Team = () => {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Visionary leader with 15+ years of experience in tech industry"
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Award-winning designer with a passion for user experience"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "Full-stack developer specializing in scalable applications"
    },
    {
      name: "Emily Brown",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Digital marketing expert with proven growth strategies"
    },
    {
      name: "David Wilson",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      bio: "Experienced in leading successful product launches"
    },
    {
      name: "Lisa Anderson",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      bio: "Creating intuitive and beautiful user experiences"
    },
    {
      name: "James Taylor",
      role: "Technical Lead",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      bio: "Architecture specialist with focus on performance"
    }
  ];

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <SubHeroSection
        title="Meet Our Team"
        description="Passionate professionals dedicated to bringing your vision to life"
      />

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={sectionVariants}
                className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-red-500 transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-red-500">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-8 border border-white/10 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our growing team
            </p>
            <Button variant="primary">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 