import Image from 'next/image';
import styles from './review-card.module.css';
import { square_PegFont } from '@/utils/fonts';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.container}>
      {/* <div>
        <Image src={review.image} alt={review.name} width={200} height={200} />
      </div> */}
      <div className={styles.content}>
        <p>{review.description}</p>
      </div>
      <div className={styles.footer}>
        <h3 className={square_PegFont.className}>{review.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
