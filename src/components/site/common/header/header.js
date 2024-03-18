'use client';
import Link from 'next/link';
import styles from './header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import Announcement from './announcement/announcement';
import { useState } from 'react';

// Announcement text
const announcement = 'Fri fragt ved køb over 499,-';

const Header = ({ logoPath, logoAlt, menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.main}>
      <Announcement text={announcement} />

      {/* navbar */}
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoPath} alt={logoAlt} width={200} height={200} />
            </Link>
          </div>
          <div className={styles.nav} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 className={styles.cross} /> : <RxHamburgerMenu className={styles.burgermenu} />}
          </div>
        </div>
      </div>

      {/* nav menu */}
      <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(false)}>
        <ul>
          {menu.map((item) => (
            <Link href={item.url} key={item.id}>
              <li className={styles.effect}>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
