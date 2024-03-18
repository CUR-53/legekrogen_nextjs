import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { square_PegFont } from '@/utils/fonts';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.social_header}>
        <p className={square_PegFont.className}>Kundeservice</p>
      </div>
      <div className={styles.contact}>
        <Link href="mailto:">kontakt@legehjørnet.dk</Link>
        <Link href="mailto:">+45 23 45 67 89</Link>
      </div>

      <div className={styles.social_header}>
        <p className={square_PegFont.className}>Følg os</p>
      </div>
      <div className={styles.social}>
        <Link href="/#">
          <FaFacebook className={styles.icon} />
        </Link>
        <Link href="/#">
          <FaInstagram className={styles.icon} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
