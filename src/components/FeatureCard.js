import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FeatureCardStyles = styled.div`
  .feature-card {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    justify-items: center;
    align-items: center;
    border: 1px solid var(--grey);
    padding: 1em;
    border-radius: 0.5em;
    .button {
      display: inline-block;
      padding: 0.5em 1em;
      margin: 10px;
      border-radius: 1.5em;
      background: var(--drk-blue);
      transition-duration: 0.5s;
    }
    .button:hover {
      background-color: var(--teal);
      color: var(--white);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    a.button {
      text-decoration: none;
      color: var(--white);
    }
  }
`;

export default function FeatureCard({ title, src, cta, page }) {
  return (
    <FeatureCardStyles>
      <article className="feature-card">
        <h3>{title}</h3>
        <img alt="placeholder" src={src} />
        <Link to={page} className="button">
          {cta}
        </Link>
      </article>
    </FeatureCardStyles>
  );
}
