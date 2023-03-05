import { graphql } from "gatsby";
import React from "react";
import Hero from "../components/Hero";

export default function IndexPage({ data }) {
  const { logo } = data;
  return (
    <>
      <Hero logo={logo} />
    </>
  );
}

export const IndexPageQuery = graphql`
  query MyQuery {
    logo: sanityLogo {
      name
      image {
        asset {
          gatsbyImageData(
            fit: FILLMAX
            layout: CONSTRAINED
            width: 800
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;
