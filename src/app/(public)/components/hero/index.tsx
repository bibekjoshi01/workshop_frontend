import styles from "./hero.module.scss";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.text__wrapper}>
          <div className={styles.text__container}>
            <p className={styles.text__heading}>The home for hackathons</p>
            <p className={styles.text__detail}>
              Where organizations and developers come together to build,
              inspire, and innovate.
            </p>
            <button>
              For organizers <FaArrowRight />
            </button>
            <button className={styles.outlinedBtn}>
              For participants <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
