import styles from './signup-response.module.css';
import Link from 'next/link';
import { square_PegFont } from '@/utils/fonts';

const SignupResponse = ({ name }) => {
  return (
    <main className={styles['response']}>
      <div className={styles.container}>
        <h1 className={`${styles.headline} ${square_PegFont.className}`}>TAK!</h1>

        <div className={styles.name}>{name}</div>
        <p>Vi er så glade for at du vil være en del af vores kundeklub.</p>
        <p>Tag et kig i din indbakke. Vi har givet dig fri fragt på din første ordre.</p>

        <Link href="/" className={styles.btn}>
          Til Forsiden.
        </Link>
      </div>
    </main>
  );
};

export default SignupResponse;
