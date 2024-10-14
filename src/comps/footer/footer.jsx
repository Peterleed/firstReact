import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <img src="/logo.png" alt="" className={styles.img} />
        </div>

        <p>Footer Section</p>
      </footer>
    </>
  );
};

export default Footer;
