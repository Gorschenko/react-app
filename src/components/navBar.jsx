import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="d-flex gap-2">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard/stats">Stats</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link to="/ui">UI Components</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/counters">Counters</Link>
      </li>
    </ul>
  );
};

export default NavBar;
