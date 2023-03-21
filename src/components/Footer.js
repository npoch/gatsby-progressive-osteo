import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';

const FooterStyles = styled.footer`
background-color: var(--drk-blue);
padding-left: 3rem;
padding-right: 3rem;
  .footer-container {
    padding-top: 5rem;
    padding-bottom: 6rem;
    /* border: 1px red solid; */
    display: grid;
    max-width: 1300px;
    margin: 0 auto;
    grid-template-columns: minmax(125px, auto) minmax(250px, 1fr) minmax(400px, 2fr) minmax(200px, 1fr);
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 600px) {
      max-width: 550px;
    }
    .footer-column {
      /* border: 1px solid green; */
      display: grid;
      color: var(--white);
      grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
      .column-title {
        justify-self: start;
        align-self: center;
        font-weight: bold;
        padding-left: 12px;
      }
      &.column-1 {
        align-items: flex-start;
        justify-content: center;
        padding: 10px;
      }
      &.column-2 {
        display: grid;
        grid-template-rows: 40px auto;
      }
      &.column-3 {
        display: grid;
        grid-template-rows: 40px auto;
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        .column-title {
          grid-column: span 2;
          @media (max-width: 600px) {
            grid-column: span 1;
          }
        }
        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      }
      &.column-4 {
        grid-template-rows: 40px auto 40px auto;
        .social-link-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
          align-items: center;
          justify-items: start;
          padding-left: 12px;
          .social-link {
            margin: 5px 8px 5px 0;
          }
        }
      }
      .link-list {
        list-style-type: none;
        padding: 0 12px;
        li {
          margin-bottom: 8px;
        }
      }
      a {
        color: var(--white);
      }
    }
  }
`;

export default function Footer(){
  const footerLogo = useStaticQuery(graphql`
    query  {
  fLogo: sanityLogo(name: {eq: "progressive osteopathy logo"}) {
    name
    id
    image {
      asset {
        gatsbyImageData(fit: FILLMAX, height: 200, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
  `);
  return <FooterStyles>
    <div className='footer-container'>
      <div className='footer-column column-1'>
        <GatsbyImage alt={footerLogo.fLogo.name} image={footerLogo.fLogo.image.asset.gatsbyImageData} />
      </div>
      <div className='footer-column column-2'>
      <h4 className='column-title'>Academy</h4>
      <ul className="link-list">
              <li>
                <Link to="/osteopathic-education">
                  Osteopathic Education
                </Link>
              </li>
              <li>
                <Link to="/pathophysiology">
                  Pathophysiology
                </Link>
              </li>
              <li>
                <Link to="/functional-neurology">
                  Functional Neurology
                </Link>
              </li>
              <li>
                <Link to="/apply">
                  Apply Now!
                </Link>
              </li>
              <li>
                <Link to="/announcements-events">
                  Announcements + Events
                </Link>
              </li>
            </ul>
      </div>
      <div className='footer-column column-3'>
      <h4 className='column-title'>Partners</h4>
      <ul className="link-list">
        <li>
          <a href="https://advancedconceptsseminars.com/">
            Advanced Concept Seminars
          </a>
        </li>
        <li>
          <a href="https://www.morphologicum.org/en/domains/evost">
            EVOST
          </a>
        </li>
        <li>
          <a href="https://www.queensu.ca">
            Queen's University
          </a>
        </li>
        <li>
          <a href="https://osteopathyontario.org/">
            Osteopathy Ontario
          </a>
        </li>
      </ul>
      <ul className='link-list'>
        <li>
          <a href="https://www.iosr-halifax.ca">
            IOSR
          </a>
        </li>
        <li>
          <a href="https://www.iafnr.org">
            IAFNR
          </a>
        </li>
        <li>
          <a href="https://osteopathielucgagnon.com/en/">
            Luc Gagnon
          </a>
        </li>
        <li>
          <a href="https://www.shawnbelliveau.com/services">
            Shawn Belliveau
          </a>
        </li>
      </ul>
      </div>
      <div className='footer-column column-4'>
      <h4 className='column-title'>About Us</h4>
      <ul className="link-list">
              <li>
                <Link to="/instructors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/philosophy">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/student-clinic">
                  Student Clinic
                </Link>
              </li>
            </ul>
      <h4 className='column-title'>Follow</h4>
        <div className="social-link-list">
          <a className="fb-link social-link" href="https://www.facebook.com/ProgressiveOsteopathy/" rel="noopener">
            <BsFacebook />
          </a>
        </div>
      </div>

    </div>
  </FooterStyles>
}