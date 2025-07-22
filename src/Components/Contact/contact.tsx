import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaFacebook, FaCheck } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs.sendForm(
        'service_rgo6uoj',
        'template_kbar91s',
        formRef.current,
        'MYg4M9alhlSDRnuLl'
      )
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          if (formRef.current) formRef.current.reset();
        }, 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/gitaukamau' },
    { icon: <FaGithub />, url: 'https://github.com/viktor-ave' },
    { icon: <FaFacebook />, url: 'https://facebook.com/Gitau Victor' }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </div>

        <div className="contact-grid">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-btn ${
                isSuccess ? 'submit-btn-success' : 'submit-btn-default'
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : isSuccess ? (
                <span className="success-message">
                  <FaCheck /> Submitted Successfully!
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          <div className="social-container">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="contact-info">
            <h3 className="social-title">Contact Info</h3>
            <p className="social-text">
              <span style={{ fontWeight: 600, color: '#67e8f9' }}>Email:</span> gitaukamau06@gmail.com <br />
              <span style={{ fontWeight: 600, color: '#67e8f9' }}>Phone:</span> +254 748612779
            </p>
          </div>
      </div>
    </section>
  );
};

export default Contact;