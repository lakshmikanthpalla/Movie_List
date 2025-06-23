import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="nav-bar">
      <h1 className="logo">
        <span>Flick</span>Finder
      </h1>
      <div>
        <p className="nav-items">
          <Link to="/">Home</Link>
        </p>
        <p className="nav-items">
          <Link to="/movies">TV Show</Link>
        </p>
        <p className="nav-items">
          <Link to="/movies">Movie</Link>
        </p>
        <p className="nav-items">
          <Link to="/movies">Upcoming</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;