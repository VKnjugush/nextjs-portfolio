// components/Layout.tsx
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'My Next.js Portfolio',
  description = 'Welcome to my professional portfolio built with Next.js',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Make sure to add a favicon.ico to public/ */}
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;