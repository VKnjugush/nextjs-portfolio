// pages/about.tsx
import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

export default function AboutPage() {
  return (
    <Layout title="About Me | Your Name" description="Learn more about my background and skills.">
      <section className={styles.aboutSection}>
        <h1>About Me</h1>
        <p>
          Hi, I'm Vincent Njuguna, a dedicated and enthusiastic software developer with a strong
          background in IT. I thrive on solving complex problems and
          creating efficient, user-friendly solutions.
        </p>
        <p>
          My journey into Software Engineering began in the year 2023 after my Highscool Certification.
          Since then, I've honed my skills in various technologies and methodologies, always eager to learn and adapt.
        </p>

        <h2>My Skills</h2>
        <ul className={styles.skillsList}>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          {/* Add more skills */}
        </ul>

        <h2>My Philosophy</h2>
        <p>
          I believe in Everyday growth and consistancy.
          I approach every project with the attention it deserves and an attitude, more of a belief that it's possible for me to efficiently tackle it.
        </p>
      </section>
    </Layout>
  );
}