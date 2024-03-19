'use client';
import { useEffect, useState } from 'react';
import Accordion from '../../snippets/accordion/accordion';
import styles from './accordions.module.css';

const Accordions = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      const response = await fetch('/api/questions');
      const data = await response.json();
      setQuestion(data);
    };

    getQuestion();
  }, []);

  return (
    <section className={styles.container}>
      {question.map((item) => {
        return <Accordion key={item._id} question={item.question} answer={item.answer}></Accordion>;
      })}
    </section>
  );
};

export default Accordions;
