import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import StandardSection from '../components/StandardSection';
import { theme, animations } from '../styles/theme';

// Lazy load components
const TeamMemberCard = lazy(() => import('../components/TeamMemberCard'));

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/400x400.png?text=CEO',
    bio: 'Visionary leader with 15+ years of industry experience',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://via.placeholder.com/400x400.png?text=Creative+Director',
    bio: 'Award-winning designer with a passion for innovation',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/400x400.png?text=Lead+Developer',
    bio: 'Full-stack developer specializing in scalable solutions',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'UX Designer',
    image: 'https://via.placeholder.com/400x400.png?text=UX+Designer',
    bio: 'User experience expert focused on intuitive design',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 5,
    name: 'David Wilson',
    role: 'Marketing Director',
    image: 'https://via.placeholder.com/400x400.png?text=Marketing+Director',
    bio: 'Strategic marketing leader with proven results',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 6,
    name: 'Lisa Chen',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/400x400.png?text=Product+Manager',
    bio: 'Product strategist with a track record of success',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const Team = () => {
  return (
    <PageLayout
      title="Our Team"
      subtitle="Meet the talented individuals behind our success"
      backgroundImage="https://via.placeholder.com/1920x1080.png?text=Team+Hero+Background"
    >
      {/* Team Members Section */}
      <StandardSection
        title="Meet Our Team"
        subtitle="Dedicated professionals committed to excellence"
        className="bg-[#0F0F0F]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={
            <div className="col-span-full flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          }>
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </Suspense>
        </div>
      </StandardSection>

      {/* Values Section */}
      <StandardSection
        title="Our Values"
        subtitle="The principles that guide our work"
        background="#1A1A1A"
        withGradient
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={animations.fadeInUp}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-400">
              We strive for excellence in everything we do, from code quality to customer service.
            </p>
          </motion.div>
          <motion.div
            variants={animations.fadeInUp}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-400">
              We believe in the power of teamwork and open communication.
            </p>
          </motion.div>
          <motion.div
            variants={animations.fadeInUp}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-400">
              We constantly push boundaries and explore new possibilities.
            </p>
          </motion.div>
        </div>
      </StandardSection>

      {/* Join Us Section */}
      <StandardSection
        title="Join Our Team"
        subtitle="Be part of something extraordinary"
        background="#0F0F0F"
        withGradient
        gradientDirection="to bottom right"
        gradientColors={['#FF4500', '#FFD700']}
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-300 mb-8">
            We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-3 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </StandardSection>
    </PageLayout>
  );
};

export default Team; 