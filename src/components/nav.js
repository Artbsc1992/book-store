import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <div className="header-container">
      <h1 className="title">Bookstore CMS</h1>
      <nav className="nav">
        <Link to="/">BOOKS</Link>
        {' '}
        {' '}
        <Link to="/categories">CATEGORIES</Link>
      </nav>
      <i className="fas fa-user" />
    </div>
  );
}

export default Nav;
