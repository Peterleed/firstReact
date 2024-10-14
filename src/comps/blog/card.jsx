import styles from "./blog.module.css";
import Male from "/male.png";
import Female from "/female.png";
import { useNavigate } from "react-router-dom";

const Card = ({ blog }) => {
  const shortTitle = `${blog.title.slice(0, 50)}...`;
  const shortBody = `${blog.body.slice(0, 150)}`;
  const nav = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => nav(`/blogs/details/${blog.id}`)}
    >
      <div className={styles.top}>
        <img src={blog.image} alt="" />
      </div>
      <div className={styles.bottom}>
        <h2>{shortTitle}</h2>
        <p>{shortBody}</p>
        <div className={styles.profile}>
          <img src={blog.gender == "male" ? Male : Female} alt="" />
          <p>{blog.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
