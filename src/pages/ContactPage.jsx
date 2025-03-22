// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For this example, we'll use EmailJS as the email service
    // You'll need to install it with: npm install @emailjs/browser
    try {
      // Import is in the try block so it doesn't fail if not installed yet
      const emailjs = await import('@emailjs/browser');
      
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
      const userId = 'YOUR_EMAILJS_USER_ID';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  
  return (
    <div className="pt-24 px-6 md:px-8 min-h-screen bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Background elements */}
        <div className="fixed top-0 left-0 w-full h-full grid-pattern opacity-30 z-[-1]"></div>
        <div className="fixed top-[30%] right-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="fixed bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
        
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-base mb-4 opacity-0 animate-fade-in-1">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent opacity-0 animate-fade-in-2">
            Contact Me
          </h1>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-3">
            Have a project in mind or want to discuss a potential opportunity? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-secondary/30 backdrop-blur-md rounded-xl p-8 border border-accent/5 shadow-lg h-fit"
          >
            <h2 className="text-3xl font-bold mb-6 text-text-primary">Let's Connect</h2>
            <p className="text-text-secondary mb-8">
              Feel free to reach out if you have any questions or if you'd like to work together. 
              I'm always open to discussing new projects and opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl mr-4">
                  <HiMail />
                </div>
                <div>
                  <h3 className="text-text-primary font-medium">Email</h3>
                  <p className="text-text-secondary">dmunj5@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl mr-4">
                  <HiPhone />
                </div>
                <div>
                  <h3 className="text-text-primary font-medium">Phone</h3>
                  <p className="text-text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl mr-4">
                  <HiLocationMarker />
                </div>
                <div>
                  <h3 className="text-text-primary font-medium">Location</h3>
                  <p className="text-text-secondary">New York, USA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-text-primary mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary/50 flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary/50 flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary/50 flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-bg-secondary/30 backdrop-blur-md rounded-xl p-8 border border-accent/5 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">Send Me a Message</h2>
              
              {submitStatus && (
                <div 
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-text-primary mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-bg-primary/40 border border-bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-text-primary"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-text-primary mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-bg-primary/40 border border-bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-text-primary"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-text-primary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-bg-primary/40 border border-bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-text-primary"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-text-primary mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 bg-bg-primary/40 border border-bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-text-primary resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-accent-gradient rounded-lg text-bg-primary font-semibold transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-accent/20'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;