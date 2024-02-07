import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='navFlex'>
        <p>
          <Link to="/">HomePage</Link>
        </p>
        <p>
          <Link to="/countries">All Countries</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;