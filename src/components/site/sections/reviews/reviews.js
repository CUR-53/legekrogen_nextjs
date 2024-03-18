'use client';
import styles from './reviews.module.css';
import ReviewCard from '../../snippets/review-card/review-card';
import { square_PegFont } from '@/utils/fonts';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(data);
    };

    getReviews();
  }, []);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={square_PegFont.className}>Vores kunder</span> UDTALER
      </h2>
      {reviews.map((Review) => {
        return <ReviewCard key={Review._id} review={Review} />;
      })}
    </section>
  );
};

export default Reviews;
