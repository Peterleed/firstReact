import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();

  return (
    <div className="error-page">
      <h1>404 Error</h1>
      <p>The page you are looking for does not exist.</p>
      <div className="section">
        <Link onClick={() => nav(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </Link>
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default Error;
