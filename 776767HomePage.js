// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/movies">Go to Movies</Link>
  </div>
);

export default HomePage;
