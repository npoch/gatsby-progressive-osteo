import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SidebarStyles = styled.section`
  position: absolute;
  background-color: white;
  border: 1px solid lightgrey;
  height: 100dvh;
  top: 0;
  width: 100%;
  display: none;
  right: -150%;
  opacity: 0%;
  transition: all 400ms ease-in-out;
  z-index: 1000;
  .close{
    font-weight: bold;
    position: fixed;
    right: 5%;
    margin: 5px 12px 12px;
    opacity: 0%;
    transition: all 200ms 400ms ease-in, all 300ms ease-out;
  }
  .menu-container {
    margin-top:  60px;
    list-style-type: none;
    width: fit-content;
    /* border: 1px red solid; */

    .menu-item.single {
      /* padding: 10px; */
      height: fit-content;
      display: block;
      background: var(--grey);
      color: var(--black);
      border: 1px rgb(118, 118, 118) solid;
      border-radius: 2px;
      /* width: 100%; */
      padding: 12px;
      margin: 5px;
      margin-right: 15px;
      text-align: center;
    }
    .dropdown{

      margin-right: 20px;
      /* border: 1px solid green; */
      button.menu-item{
        width: 100%;
        padding: 12px;
        margin: 5px;
      }
      .dropdown-menu {
        list-style-type: none;
        padding-left: 0;
        height: 0;
        transition: height 300ms ease-in-out;
        overflow-y: hidden;
        .menu-item {
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 0;
          padding-bottom: 0;
          height: 0;
          display: hidden;
          transition: all 400ms ease-in-out;
        }
        &.menu-open {
          height: fit-content;
          .menu-item {
            padding: 10px;
            height: fit-content;
            display: block;
          }
        }
      }
    }
  }
  &.active {
    display: block;
    opacity: 1;
    right: 0;
    .close {
      display: block;
      opacity: 1;
      right: 0;
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

export default function Sidebar() {
  function slideToggle(e){
    const button = e.target;
    if(button.nextSibling.classList.contains('menu-open')){
      button.nextSibling.classList.toggle('menu-open');
      return;
    }
    document.querySelectorAll('.menu-container .dropdown-menu.menu-open').forEach(item => {
        item.classList.toggle('menu-open');
    })
    button.nextSibling.classList.toggle('menu-open');
  }
  function close(){
    document.getElementById('sidebar-mb').classList.remove('active');
    if(document.querySelectorAll('.menu-container .dropdown-menu.menu-open').length < 1) return;
    document.querySelectorAll('.menu-container .dropdown-menu.menu-open').forEach(item => {
      item.classList.remove('menu-open');
    })
  }
  return <SidebarStyles id="sidebar-mb" className='sidebar'>
    <button className="close" onClick={close}>&times;</button>
    <ul className='menu-container'>
      <li className='menu-item link single'>
        <Link onClick={close} to='/apply'>Apply Today!</Link>
      </li>
      <li className='menu-item link single'>
        <Link onClick={close} to='/blog'>Blog</Link>
      </li>
    <li className='dropdown' data-dropdown>
          <button className='menu-item link' onClick={slideToggle} data-dropdown-button>About Us</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/philosophy" onClick={close}>Philosophy</Link>
            </li>
            <li className='menu-item'>
              <Link to="/instructors" onClick={close}>Instructors</Link>
            </li>
            <li className='menu-item'>
              <Link to="/faqs" onClick={close}>Frequently Asked Questions</Link>
            </li>
          </ul>
        </li>
        <li className='dropdown' data-dropdown>
          <button className='menu-item link' onClick={slideToggle} data-dropdown-button>Programs</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/osteopathic-education" onClick={close}>Our Curriculum</Link>
            </li>
            <li className='menu-item'>
              <Link to="/pathophysiology" onClick={close}>Pathophysiology</Link>
            </li>
            <li className='menu-item'>
              <Link to="/functional-neurology" onClick={close}>Functional Neurology</Link>
            </li>
          </ul>
        </li>
        <li className='dropdown' data-dropdown>
          <button className='menu-item link' onClick={slideToggle} data-dropdown-button>Student Clinic</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/student-clinic" onClick={close}>Information</Link>
            </li>
            {/* <li className='menu-item'>
              <Link to="/#" onClick={close}>Book Appointment</Link>
            </li> */}
          </ul>
        </li>
        <li className='dropdown' data-dropdown>
          <button className='menu-item link' onClick={slideToggle} data-dropdown-button>More Info</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/announcements-events" onClick={close}>Announcements + Events</Link>
            </li>
            <li className='menu-item'>
              <Link to="/contact-us" onClick={close}>Contact Us</Link>
            </li>
          </ul>
        </li>
    </ul>
  </SidebarStyles>
}