import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => {
  return (
    <nav>
      <h1>Wilders Book</h1>
      <ul>
        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'active' : ''  }>Home</NavLink></li>
        <li><NavLink to={'/friends'}>Friends</NavLink></li>
        <li><NavLink to={'/profile/27'}>My profile</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;
