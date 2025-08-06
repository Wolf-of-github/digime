import React, { useState } from 'react';
import { Send, Mail, User, MessageCircle, MapPin, Phone, Linkedin, Github, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = () => {
    setIsLoading(true);
    setFormStatus('Sending...');

    // Simulate API call - replace with actual emailjs implementation
    setTimeout(() => {
      setMessageSent(true);
      setFormStatus('Message sent successfully!');
      setIsLoading(false);
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setMessageSent(false);
        setFormStatus('');
      }, 5000);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_name && formData.user_email && formData.subject && formData.message) {
      sendEmail();
    }
  };

  return (
    <section className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100 font-mono mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        <p className="text-gray-300 font-mono mt-4 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Email Card */}
              <div className="bg-white bg-opacity-10 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-15 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-mono text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:iapte@usc.edu" 
                      className="text-gray-300 hover:text-white font-mono text-sm transition-colors duration-200"
                    >
                      iapte@usc.edu
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white bg-opacity-10 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-15 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-200 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-mono text-lg mb-1">Location</h3>
                    <p className="text-gray-300 font-mono text-sm">Los Angeles, CA</p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white bg-opacity-10 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-15 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-mono text-lg mb-1">Response Time</h3>
                    <p className="text-gray-300 font-mono text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-6">
              <h3 className="font-bold text-white font-mono text-lg mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                Let's Connect
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white font-mono text-sm transition-colors duration-200 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white font-mono text-sm transition-colors duration-200 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white bg-opacity-10 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-15">
              
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white font-mono mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-300 font-mono text-sm">
                  Fill out the information below and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Form UI */}
              <div className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-blue-400/50 focus:bg-gray-600/50 hover:bg-gray-600/30 transition-all duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-blue-400/50 focus:bg-gray-600/50 hover:bg-gray-600/30 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative group">
                  <MessageCircle className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-blue-400/50 focus:bg-gray-600/50 hover:bg-gray-600/30 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Message"
                    className="w-full px-4 py-3.5 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-blue-400/50 focus:bg-gray-600/50 hover:bg-gray-600/30 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.user_name || !formData.user_email || !formData.subject || !formData.message}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-mono font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Message */}
                {formStatus && (
                  <div className={`p-4 rounded-lg border transition-all duration-300 ${
                    formStatus.includes('successfully') 
                      ? 'bg-green-500/20 border-green-400/30 text-green-200' 
                      : formStatus.includes('Sending') 
                      ? 'bg-blue-500/20 border-blue-400/30 text-blue-200'
                      : 'bg-red-500/20 border-red-400/30 text-red-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      {formStatus.includes('successfully') ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : formStatus.includes('Sending') ? (
                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <p className="font-mono font-medium">{formStatus}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white font-mono mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-300 font-mono mb-6 max-w-2xl mx-auto">
              Whether you have a clear vision or just an idea, I'm here to help bring it to life. 
              Let's discuss your project and see how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:iapte@usc.edu"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-mono font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Quick Email
              </a>
              <a
                href="https://calendly.com/iapte-usc/30min" target='blank'
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-mono font-medium hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;