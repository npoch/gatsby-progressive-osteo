import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeroStyles = styled.div`
  .hero-container {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    padding: 10rem 0;
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
    }
    .hero-col-span-2 {
      grid-column: span 2;
    }
    .hero-col {
      .gatsby-image-wrapper {
        @media (max-width: 991px) {
          max-width: 400px;
        }
        @media (max-width: 500px) {
          max-width: 280px;
        }
      }
    }
    .button {
      display: inline-block;
      padding: 0.8em 1.2em;
      margin: 10px;
      border-radius: 1.5em;
      background: var(--teal);
      transition-duration: 0.5s;
    }
    .button:hover {
      background-color: var(--drk-blue);
      color: var(--white);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    a.button {
      text-decoration: none;
      color: var(--white);
    }
  }
`;

export default function Hero({ logo }) {
  return (
    <HeroStyles>
      <div className="hero-container">
        <section className="hero-col-span-2">
          <h1>Ontario Academy of Progressive Osteopathy</h1>
          <p>Discover the future of Osteopathy in Canada</p>
          <div className="button-container">
            <Link to="/apply" className="button">
              Apply Today
            </Link>
            <Link to="/philosophy" className="button">
              Learn More
            </Link>
          </div>
        </section>
        <div className="hero-col">
          <GatsbyImage
            alt={logo.name}
            image={logo.image.asset.gatsbyImageData}
          />
        </div>
      </div>
    </HeroStyles>
  );
}
