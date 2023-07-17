import Image from 'next/image';
import styles from './page.module.css';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Guide from '../components/Guide';
import Properties from '../components/Properties';
import Details from '../components/Details';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </>
    // <main className={styles.main}>
    //   <div className={styles.description}>

    //   </div>
    // </main>
  );
}
