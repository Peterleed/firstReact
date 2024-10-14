import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link>
            <img src="/logo.png" alt="" className={styles.img} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about_us">About us</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
