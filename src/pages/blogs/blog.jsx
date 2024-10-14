import Card from "../../comps/blog/card";
import { blogsData } from "../../utils/data";
import styles from "../blogs/blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blogPage}>
      {blogsData.map((blog, i) => (
        <Card blog={blog} key={i} />
      ))}
    </div>
  );
};

export default Blog;
