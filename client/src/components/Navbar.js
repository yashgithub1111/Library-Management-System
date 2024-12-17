import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/transaction">Transaction</Link></li>
        <li><Link to="/addbook">Add Book</Link></li>
        <li><Link to="/addmember">Add Membership</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
