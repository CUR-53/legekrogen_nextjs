import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import styles from './page.module.css';

const heroData = {
  title: 'At lege er at leve',
  byline: 'Her hos os har vi et stort udvalg af legetøj i høj kvalitet',
  img: '/heros/forsiden.jpg',
  imgAlt: 'At lege er at leve',
};

const Page = () => {
  return (
    <main className={styles.container}>
      <HeroTwo data={heroData} />
    </main>
  );
};

export default Page;
