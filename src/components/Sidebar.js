import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SidebarStyles = styled.section`
  position: absolute;
  background-color: white;
  border: 1px solid lightgrey;
  height: 100dvh;
  top: 0;
  right: -150%;
  transition: right 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &.active {
    right: 0;
  }
`;

export default function Sidebar() {
  return <SidebarStyles id="sidebar" className='sidebar'>
    <button onClick={() => {document.getElementById('sidebar').classList.remove('active')}}>&times;</button>
    <ul>
    <li className='dropdown' data-dropdown>
          <button className='menu-item link' data-dropdown-button>About Us</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/philosophy">Philosophy</Link>
            </li>
            <li className='menu-item'>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li className='menu-item'>
              <Link to="/faqs">Frequently Asked Questions</Link>
            </li>
          </ul>
        </li>
        <li className='dropdown' data-dropdown>
          <button className='menu-item link' data-dropdown-button>Programs</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/our-curriculum">Our Curriculum</Link>
            </li>
            <li className='menu-item'>
              <Link to="/pathophysiology">Pathophysiology</Link>
            </li>
            <li className='menu-item'>
              <Link to="/functional-neurology">Functional Neurology</Link>
            </li>
          </ul>
        </li>
        <li className='dropdown' data-dropdown>
          <button className='menu-item link' data-dropdown-button>Student Clinic</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/student-clinic">Information</Link>
            </li>
            <li className='menu-item'>
              <Link to="/#">Book Appointment</Link>
            </li>
          </ul>
        </li>
        <li className='dropdown' data-dropdown>
          <button className='menu-item link' data-dropdown-button>More Info</button>
          <ul className='dropdown-menu'>
            <li className='menu-item'>
              <Link to="/announcements-events">Announcements + Events</Link>
            </li>
            <li className='menu-item'>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </li>
    </ul>
  </SidebarStyles>
}