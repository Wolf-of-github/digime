import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('Sending...');

    emailjs
      .sendForm('service_jtvu3qt', 'template_3kficon', form.current, '7Cc_vyP4WFrvI0n3l')
      .then(
        () => {
          setMessageSent(true);
          setFormStatus('Message sent successfully!');
          setIsLoading(false);
          setTimeout(() => {
            setMessageSent(false);
            setFormStatus('');
            e.target.reset();
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setFormStatus('Failed to send message.');
          setIsLoading(false);
          setTimeout(() => setFormStatus(''), 5000);
        }
      );
  };

  return (
    <section className="bg-white bg-opacity-10 rounded-xl px-4 py-6 shadow-lg hover:shadow-2xl transition duration-300 max-w-5xl mx-auto" id="contact">
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgb(147, 51, 234)' }}>
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        {/* Form */}
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="max-w-xl mx-auto space-y-4"
        >
          <div className="backdrop-blur-sm p-4 rounded-3xl shadow-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3.5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    '--tw-ring-color': 'rgb(147, 51, 234)'
                  }}
                  onFocus={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                  onBlur={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-3.5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    '--tw-ring-color': 'rgb(147, 51, 234)'
                  }}
                  onFocus={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                  onBlur={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative mb-6">
              <MessageCircle className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full pl-12 pr-4 py-3.5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  '--tw-ring-color': 'rgb(147, 51, 234)'
                }}
                onFocus={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                onBlur={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Message */}
            <div className="relative mb-6">
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3.5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  '--tw-ring-color': 'rgb(147, 51, 234)'
                }}
                onFocus={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                onBlur={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              style={{ 
                backgroundColor: isLoading ? 'rgba(255, 255, 255, 0.1)' : 'rgb(147, 51, 234)'
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = 'rgba(147, 51, 234, 0.8)')}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = 'rgb(147, 51, 234)')}
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
              <div className={`mt-4 p-4 rounded-xl text-center transition-all duration-300 ${
                formStatus.includes('successfully') 
                  ? 'text-white' 
                  : formStatus.includes('Sending') 
                  ? 'text-white'
                  : 'text-white'
              }`}
              style={{ 
                backgroundColor: formStatus.includes('successfully') 
                  ? 'rgb(147, 51, 234)' 
                  : formStatus.includes('Sending') 
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              >
                <p className="font-medium">{formStatus}</p>
              </div>
            )}
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Prefer to reach out directly?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity" style={{ color: 'rgb(147, 51, 234)' }}>
              <Mail className="w-4 h-4" />
              iapte@usc.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;