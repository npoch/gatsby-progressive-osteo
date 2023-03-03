import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarStyles = styled.nav`
  .nav-container {
    display: grid;
    grid-template-columns: 20% 80%;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: 15px auto;
    .logo {
      position: relative;
      left: 0;
      max-width: 200px;
    }
    .nav-right {
      position: relative;
      right: 0;
      display: grid;
      grid-template-columns: 80px 155px 120px;
      grid-gap: 20px;
      justify-content: end;
      align-items: center;
      list-style-type: none;
      list-style-position: inside;
      padding-left: 0;
      .dropdown {
        position: relative;
      }
      .dropdown-menu {
        position: absolute;
        left: 0;
        list-style-type: none;
        width: max-content;
        padding-left: 0;
        top: calc(100% + 0.5rem);
        background-color: white;
        padding: 0.75rem;
        border-radius: 0.25rem;
        box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.3);
        opacity: 0;
        translate: 0 -10px;
        pointer-events: none;
        transition: opacity 150ms ease-in-out, translate 150ms ease-in-out;
      }
      .dropdown.active > .link + .dropdown-menu {
        opacity: 1;
        translate: 0 0;
        pointer-events: auto;
      }
      button.menu-item {
        border: unset;
        background-color: unset;
        text-decoration: underline;
      }
      .menu-item {
        padding: 8px 12px;
      }
    }
  }
`;


export default function Navbar(){
  
  return <NavbarStyles>
    <div className='nav-container'>
      <p className='logo'>LOGO GOES HERE</p>
      <ul className='nav-right'>
        <li className='menu-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='menu-item'>
          <Link to='/apply'>Apply Today!</Link>
        </li>
        <li className='menu-item'>
          <Link to='#' onClick={() => {document.getElementById('sidebar').classList.add('active')}}>Menu</Link>
        </li>
      </ul>
    </div>
  </NavbarStyles>
}