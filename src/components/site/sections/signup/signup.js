'use client';
import { useEffect } from 'react';
import styles from './signup.module.css';
import { square_PegFont } from '@/utils/fonts';

const SignupMedlem = ({ setFormSubmitted, setSubscriberName }) => {
  useEffect(() => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      fetch('/api/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((response) => response.json())
        .then((data) => {
          setSubscriberName(name);
          setFormSubmitted(true);
        });
    });
  }, [setFormSubmitted, setSubscriberName]);

  return (
    <section>
      <form className={styles.container}>
        <div className={styles.formGroup}>
          <input className={square_PegFont.className} type="text" id="name" placeholder="Fulde navn" />
        </div>
        <div className={styles.formGroup}>
          <input className={square_PegFont.className} type="email" id="email" placeholder="E-mail" />
        </div>
        <div className={styles.formGroup}>
          <textarea className={square_PegFont.className} id="message" placeholder="Ris og/eller ros"></textarea>
        </div>
        <button type="submit" className={styles.button}>
          BLIV MEDLEM NU!
        </button>
      </form>
    </section>
  );
};

export default SignupMedlem;
