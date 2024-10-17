import { useState } from "react";
import Card from "../../comps/blog/card";
import { blogsData } from "../../utils/data";
import styles from "../blogs/blog.module.css";

const Blog = () => {
  const [blogsPerPage, setBlogsPerPage] = useState(3);
  const currentBlogs = blogsData.slice(0, blogsPerPage);

  const hide = currentBlogs.length === blogsData.length;

  return (
    <div className={styles.blogs}>
      <div className={styles.blogPage}>
        {currentBlogs.map((blog, i) => (
          <Card blog={blog} key={i} />
        ))}
      </div>

      <div
        className={hide ? `${styles.hidden}` : `${styles.loadMore}`}
        onClick={() => setBlogsPerPage(blogsPerPage + 3)}
      >
        <p>Load More</p>
      </div>
    </div>
  );
};

export default Blog;
