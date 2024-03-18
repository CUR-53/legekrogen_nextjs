import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import styles from './page.module.css';
import ProductCollection from '@/components/site/sections/product-collection/product-collection';
import Kundeklub from '@/components/site/sections/kundeklub/kundeklub';
import Footer from '@/components/site/common/footer/footer';

const heroTwoData = {
  title: 'På udkig efter nyt',
  byline: 'LEGETØJ?',
  img: '/heros/produkter.jpg',
  imgAlt: 'På udkig efter nyt',
};

const productCollectionData = {
  title: 'Alt vores',
  titleLineTwo: 'LEGETØJ',
};

const Page = () => {
  return (
    <main className={styles.container}>
      <HeroTwo data={heroTwoData} />
      <ProductCollection data={productCollectionData} />
      <Kundeklub />
      <Footer />
    </main>
  );
};

export default Page;
