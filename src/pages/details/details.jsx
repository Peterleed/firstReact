import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./details.module.css";
import { blogsData } from "../../utils/data";
import Male from "/male.png";
import Female from "/female.png";

const Details = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const goBack = function () {
    nav(-1);
  };

  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  return (
    <div className={styles.blogDetails}>
      <div className={styles.header}>
        <div className={styles.backArrow} onClick={goBack}>
          <img src="/backarrow.png" alt="" />
        </div>
        <h1>{blog.title}</h1>
        <div className={styles.wrapper}>
          <img src={blog.image} alt="" />
        </div>
      </div>
      <div className={styles.blogBody}>
        <div className={styles.author}>
          <div className={styles.userProfile}>
            <img src={blog.gender == "male" ? Male : Female} alt="" />
            <p>{blog.author}</p>
          </div>
          <div className={styles.category}>
            <p>
              <b>Category:</b> {blog.category}
            </p>
          </div>
        </div>
        <div className={styles.bodyImage}>
          <img src={blog.image} alt="" />
        </div>
        <div className={styles.blogText}>
          <p>{blog.body}</p>
        </div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
};

export default Details;
