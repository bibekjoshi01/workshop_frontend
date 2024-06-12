import styles from "./search.module.scss";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.search}>
          <div className={styles.input}>
            <span>
              <IoIosSearch />
            </span>
            <input type="text" placeholder="Find your next hackathon" />
          </div>
          <button>Search Hackathons</button>
        </div>
      </div>
    </div>
  );
}
