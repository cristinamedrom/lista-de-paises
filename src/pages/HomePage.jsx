import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is the home page of the Countries List</p>

      <nav>
        <ul>
          <li>
            <Link to="/countries">All countries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;