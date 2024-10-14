import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>
        Welcome to My
        <span className={styles.blogLink}>
          <Link to="/blogs">Blog</Link>
        </span>
        Page
      </h1>
      <a href="#about">
        <button>Learn More</button>
      </a>
    </div>
  );
};

export default Hero;
