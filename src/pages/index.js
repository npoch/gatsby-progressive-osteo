import { graphql } from "gatsby";
import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";

export default function IndexPage({ data }) {
  const { logo } = data;
  return (
    <>
      <Hero logo={logo} />
      <Featured />
    </>
  );
}

export const IndexPageQuery = graphql`
  query GetLogo {
    logo: sanityLogo(name: { eq: "progressive osteopathy logo" }) {
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
