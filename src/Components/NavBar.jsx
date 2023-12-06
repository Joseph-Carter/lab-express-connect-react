import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="captainsNav-navbar">
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New logs</Link>
      </button>
    </nav>
  );
}