import Link from 'next/link';
import styles from './header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import Announcement from './announcement/announcement';

// Announcement text
const announcement = 'Fri fragt ved køb over 499,-';

const Header = ({ logoPath, logoAlt }) => {
  return (
    <header>
      <Announcement text={announcement} />

      {/* navbar */}
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoPath} alt={logoAlt} width={200} height={200} />
            </Link>
          </div>
          <div className={styles.nav}>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>

      {/* nav menu */}
      <div></div>
    </header>
  );
};

export default Header;
