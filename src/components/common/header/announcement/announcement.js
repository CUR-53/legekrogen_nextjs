import styles from './announcement.module.css';
import { FaTruck } from 'react-icons/fa';

const Announcement = ({ text }) => {
  return (
    <div className={styles.container}>
      <FaTruck />
      <p>{text}</p>
    </div>
  );
};

export default Announcement;
