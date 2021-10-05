import React from 'react';
import { Link } from 'react-router-dom';

const BookNavBar = () => (
  <nav className="navBar">
    <ul className="navList">
      <div className="linkContainer">
        <li className="navItem">
          <Link to="/" className="navLink navBrand">BookStore CMS</Link>
        </li>
        <li className="navItem">
          <Link to="/" className="navLink navBooks">Books</Link>
        </li>
        <li className="navItem">
          <Link to="/categories" className="navLink navCategories"> Categories </Link>
        </li>
      </div>
      <div className="logContainer">
        <Link to="/" className="logUser">
          <i className="fas fa-user rounded"> </i>
        </Link>
      </div>
    </ul>
  </nav>
);

export default BookNavBar;