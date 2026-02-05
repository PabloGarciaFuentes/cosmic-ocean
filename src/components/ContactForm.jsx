import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
        setEmail('');
    };

    const socialLinks = [
        { icon: Instagram, label: 'Instagram', href: '#', color: '#E4405F' },
        { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
        { icon: Youtube, label: 'YouTube', href: '#', color: '#FF0000' },
        { icon: MessageCircle, label: 'Discord', href: '#', color: '#5865F2' },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Stay Connected</span>
                    <h2 className="section-title">Join the <span className="text-gradient">Journey</span></h2>
                    <p className="section-subtitle">
                        Subscribe for exclusive releases, behind-the-scenes content, and tour announcements.
                    </p>

                    {isSubmitted ? (
                        <motion.div
                            className="success-message"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CheckCircle size={48} />
                            <h3>Welcome aboard!</h3>
                            <p>You're now part of the Cosmic Ocean crew.</p>
                        </motion.div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <Mail size={20} className="input-icon" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isLoading ? (
                                    <span className="loading-spinner" />
                                ) : (
                                    <>
                                        Subscribe
                                        <Send size={16} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}

                    <div className="social-section">
                        <span className="social-label">Follow the journey</span>
                        <div className="social-grid">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    className="social-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -5, borderColor: social.color }}
                                    style={{ '--hover-color': social.color }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} />
                                    <span>{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .contact-section {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-content {
          text-align: center;
        }
        
        .section-label {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-glow-cyan);
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          margin-bottom: 2.5rem;
        }
        
        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          max-width: 480px;
          margin: 0 auto 3rem;
        }
        
        .input-wrapper {
          flex: 1;
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          pointer-events: none;
        }
        
        .input-wrapper input {
          width: 100%;
          padding: 1rem 1rem 1rem 3.25rem;
          background: rgba(13, 13, 26, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          color: var(--color-text-primary);
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
        }
        
        .input-wrapper input::placeholder {
          color: var(--color-text-muted);
        }
        
        .input-wrapper input:focus {
          border-color: var(--color-glow-cyan);
          background: rgba(13, 13, 26, 0.8);
        }
        
        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.75rem;
          background: var(--color-glow-cyan);
          border: none;
          border-radius: 0.75rem;
          color: var(--color-cosmic-void);
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          white-space: nowrap;
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 3rem 2rem;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 1rem;
          color: var(--color-glow-cyan);
          margin-bottom: 3rem;
        }
        
        .success-message h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin: 0;
        }
        
        .success-message p {
          color: var(--color-text-secondary);
          margin: 0;
        }
        
        .social-section {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 3rem;
        }
        
        .social-label {
          display: block;
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        
        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem;
          background: rgba(13, 13, 26, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: all 0.3s;
        }
        
        .social-card:hover {
          background: rgba(13, 13, 26, 0.8);
          color: var(--hover-color);
        }
        
        .social-card span {
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        
        /* Responsive */
        @media (max-width: 600px) {
          .newsletter-form {
            flex-direction: column;
          }
          
          .submit-btn {
            width: 100%;
            justify-content: center;
          }
          
          .social-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
        </section>
    );
}
