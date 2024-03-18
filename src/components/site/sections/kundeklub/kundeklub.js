import Link from 'next/link';
import styles from './kundeklub.module.css';
import { square_PegFont } from '@/utils/fonts';

const Kundeklub = () => {
  return (
    <section className={styles.container}>
      <p>Kunne du også tænke dig at blive medlem af vores</p>
      <h2 className={square_PegFont.className}>Kundeklub?</h2>
      <Link href="/kundeklubben">
        <button>BLIV MEDLEM NU!</button>
      </Link>
    </section>
  );
};

export default Kundeklub;
