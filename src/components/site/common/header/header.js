'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import Announcement from './announcement/announcement';
import Cart from '../../snippets/cart/cart';

import { RxHamburgerMenu } from 'react-icons/rx';
import { FaCartShopping } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { useBasket } from '@/context/basket';
import { useState } from 'react';

// Announcement text
const announcement = 'Fri fragt ved køb over 499,-';

const Header = ({ logoPath, logoAlt, menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [OpenCart, setOpenCart] = useState(false);

  const { basket } = useBasket();

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
          {/* nav menu */}
          <div className={styles.left}>
            {/* Basket */}
            <div className={styles.nav} onClick={() => setOpenCart(!OpenCart)}>
              <p className={styles.cartAmount}>{basket.length > 0 && basket.length}</p>
              <FaCartShopping className={styles.bars}></FaCartShopping>
            </div>
            <div className={styles.nav} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <RxCross2 className={styles.cross} /> : <RxHamburgerMenu className={styles.burgermenu} />}
            </div>
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

      {/* Cart */}
      <div className={`${styles.cart} ${OpenCart ? styles.openCart : ''}`}>
        <div className={styles.cartHeader}>
          <button className={styles.closeButton} onClick={() => setOpenCart(!OpenCart)}>
            <RxCross2 className={styles.cross} />
          </button>
          <div className={styles.cartTitle}>Kurv</div>
        </div>
        {basket.length > 0 && <Cart />}
        {/* if there are no items in the cart, show this */}
        {basket.length === 0 && <div className={styles.cartEmpty}>Kurven er tom</div>}
      </div>
    </header>
  );
};

export default Header;
