import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/theme';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Add your form submission logic here
      // For now, we'll just simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <motion.form
      variants={animations.fadeInUp}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary/90 transition-colors ${
            status.submitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status.submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-500 text-center"
        >
          Message sent successfully!
        </motion.div>
      )}

      {status.error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-center"
        >
          {status.error}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm; 