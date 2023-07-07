import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FaqCardStyles = styled.div`
  border: 2px var(--grey) solid;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  h2 {
    margin-bottom: 10px;
  }
  a {
    padding: 20px;
    text-decoration: none;
  }
  :hover {
    background-color: var(--grey);
  }
`;

export default function FaqCard({ faq }) {
  return (
    <FaqCardStyles>
      <Link to={`/faq/${faq.slug.current}`}>
        <h2>{faq.title}</h2>
        <p>Click to read more</p>
      </Link>
    </FaqCardStyles>
  );
}
