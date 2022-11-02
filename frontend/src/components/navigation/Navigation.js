import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';


const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Shopping</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
