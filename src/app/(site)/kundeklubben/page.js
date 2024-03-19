'use client';
import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import styles from './page.module.css';
import Kundeklub from '@/components/site/sections/kundeklub/kundeklub';
import SignupMedlem from '@/components/site/sections/signup/signup';
import SignupResponse from '@/components/site/snippets/signup-response/signup-response';
import { useState } from 'react';

const heroTwoData = {
  title: 'Bliv medlem af vores',
  byline: 'KUNDEKLUB',
  para: 'og få ekslusive tilbud og nyheder før alle andre',
  img: '/heros/medlem.jpg',
  imgAlt: 'Bliv medlem af vores',
};

const Page = () => {
  const [subscriberName, setSubscriberName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <main className={styles.page}>
      <HeroTwo data={heroTwoData} />
      {formSubmitted ? <SignupResponse name={subscriberName} /> : <SignupMedlem setFormSubmitted={setFormSubmitted} setSubscriberName={setSubscriberName} />}
      <Kundeklub />
    </main>
  );
};

export default Page;
