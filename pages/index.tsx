// app/page.tsx
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';


export default function HomePage() {
  return (
    <Layout title="Home | Your Name" description="Welcome to my portfolio homepage.">
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/Images/free-photo-of-footprints-in-sand-beach-serenity.jpeg" // Path relative to the public directory
            alt="Your Name - Profile Picture"
            width={200}
            height={200}
            className={styles.profileImage}
            priority //  Good for LCP element
          />
        </div>
        <div className={styles.heroText}>
          <h1>Hello, I'm Vincent Njuguna</h1>
          <p>I'm a Software Engineer passionate about the world of Tech.</p>
          <p>This is my portfolio, built with Next.js, showcasing my skills and projects.</p>
          <Link href="/projects" legacyBehavior>
            <a className={styles.ctaButton}>View My Projects</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}