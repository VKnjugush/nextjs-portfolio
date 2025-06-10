// pages/contact.tsx
import Layout from '../components/Layout';
import styles from '@/styles/Contact.module.css';

export default function ContactPage() {
  // For a real form, you'd handle submission with state and an API route or third-party service.
  // This is a simplified display.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submission is not implemented in this demo.');
    // In a real app:
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    // console.log(data);
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }) ...
  };

  return (
    <Layout title="Contact Me | Your Name" description="Get in touch with me.">
      <section className={styles.contactSection}>
        <h1>Contact Me</h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          Feel free to reach out!
        </p>

        <div className={styles.contactMethods}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch Directly</h2>
            <p><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
            {/* Add other social links or phone if desired */}
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Send Me a Message</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}