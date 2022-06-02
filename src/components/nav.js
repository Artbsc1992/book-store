import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="header-container">
        <h1>Bookstore</h1>
        <nav>
          <Link to="/">BOOKS</Link> {' '}
          <Link to="/categories">CATEGORIES</Link>
        </nav>
      </div>
  );
}

export default Nav