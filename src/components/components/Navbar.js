import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">Login</Link> |{' '}
      <Link to="/home">Home</Link>
      <p>Status: {isAuth ? 'Authenticated' : 'Unauthenticated'}</p>
    </nav>
  );
};

export default Navbar;
