import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-section">
        <span className="logo-icon">📚</span>

        <h2 className="logo-text">
          Digital Library
        </h2>
      </div>

      {/* MENU */}
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;