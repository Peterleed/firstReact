import styles from "./home.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="email">Email Address</label>
        <input type="email" name="" id="" />
        <label htmlFor="name">Phone Number</label>
        <input type="number" name="" id="" />
        <label htmlFor="name">Message</label>
        <textarea name="" id=""></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
