import Image from 'next/image';
import styles from './heroTwo.module.css';
import { square_PegFont } from '@/utils/fonts';

const HeroTwo = ({ data }) => {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image src={data.img} alt={data.imgAlt} width={2000} height={1000} />
        <div className={styles.text}>
          <h2 className={`${styles.heading} ${square_PegFont.className}`}>{data.title}</h2>
          <h2 className={styles.byline}>{data.byline}</h2>
          <p className={styles.para}>{data.para}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
