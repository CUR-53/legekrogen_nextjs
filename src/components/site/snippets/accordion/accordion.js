import { IoIosArrowDown } from 'react-icons/io';
import styles from './accordion.module.css';
import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.container} ${open ? styles.active : null}`}>
      <div className={`${styles.question} ${open ? styles.active : null}`} onClick={() => setOpen(!open)}>
        <p>{question}</p>
        <IoIosArrowDown className={`${styles.icon} ${open ? styles.active : null}`} />
      </div>

      <p className={styles.answer}>{answer}</p>
    </div>
  );
};

export default Accordion;
