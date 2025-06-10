// pages/projects.tsx
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';

// Dummy project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A web application for calculating commission and boosting productivity. Built with React and Node.js.',
    imageUrl: '/Images/pexels-photo-code.jpeg', // Create this image in public/images/
    liveUrl: '#', // Link to live demo
    repoUrl: '#', // Link to GitHub repo
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An e-hub platform with a focus on hosting tournaments. Utilized Next.js for SSR.',
    imageUrl: '/Images/pexels-photo-comps.jpeg', // Create this image in public/images/
    liveUrl: '#',
    repoUrl: '#',
  },
  // Add more projects
];



export default function ProjectsPage() {
  return (
    <Layout title="My Projects | Your Name" description="Discover the projects I've worked on.">
      <section className={styles.projectsSection}>
        <h1>My Projects</h1>
        <p>Here are some of the projects I'm proud to have worked on.</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600} //  Intrinsic width of the image
                  height={400} // Intrinsic height of the image
                  layout="responsive" // Makes image responsive within its container
                  objectFit="cover"
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Live Demo
                  </a>
                )}
                {project.repoUrl && project.repoUrl !== '#' && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}