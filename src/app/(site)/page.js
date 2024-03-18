import Hero from '@/components/site/sections/hero/hero';
import styles from './page.module.css';
import ProductCollection from '@/components/site/sections/product-collection/product-collection';
import Reviews from '@/components/site/sections/reviews/reviews';
import Kundeklub from '@/components/site/sections/kundeklub/kundeklub';
import Footer from '@/components/site/common/footer/footer';

const heroData = {
  title: 'At lege er at leve',
  byline: 'Her hos os har vi et stort udvalg af legetøj i høj kvalitet',
  img: '/heros/forsiden.jpg',
  imgAlt: 'At lege er at leve',
};

const productCollectionData = {
  title: 'Et udpluk af vores',
  titleLineTwo: 'LEGETØJ',
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero data={heroData} />
      <ProductCollection data={productCollectionData} recommended={true} />
      <Reviews />
      <Kundeklub />
      <Footer />
    </main>
  );
}
