// components/Navbar.tsx
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'; // We'll create this CSS module next

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>MyPortfolio</a>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" legacyBehavior><a>Home</a></Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior><a>About</a></Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior><a>Projects</a></Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior><a>Contact</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;