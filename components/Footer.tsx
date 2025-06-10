// components/Footer.tsx
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Veekay All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;