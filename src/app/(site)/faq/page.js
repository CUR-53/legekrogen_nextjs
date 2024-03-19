import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import styles from './page.module.css';
import Kundeklub from '@/components/site/sections/kundeklub/kundeklub';
import Accordions from '@/components/site/sections/accordions/accordions';

const heroTwoData = {
  title: 'Har du nogle',
  byline: 'SPØRGSMÅL?',
  para: 'Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os',
  img: '/heros/produkter.jpg',
  imgAlt: 'På udkig efter nyt',
};

const Page = () => {
  return (
    <main className={styles.page}>
      <HeroTwo data={heroTwoData} />
      <Accordions />
      <Kundeklub />
    </main>
  );
};

export default Page;
