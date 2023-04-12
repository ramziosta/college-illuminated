import '../styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import styles from  './page.module.scss';
import '../styles/app.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'College Illuminated',
  description: 'For students by student helping in college admissions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <div  >
      <Navbar />
      <body className={styles.global} >{children}</body>
      <Footer />
    </div>

  )
}