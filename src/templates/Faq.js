import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const SingleFaqStyles = styled.div`
  
`;

export default function SingleFaq({ data }) {
  const faq = data.faq;
  return (
    <SingleFaqStyles>
      {/* <SEO title={faq.title} /> */}
      <h1>{faq.title}</h1>
      <BlockContent blocks={faq._rawContent} serializers={serializers} />
    </SingleFaqStyles>
  );
}

export const query = graphql`
  query ($slug: String!) {
    faq: sanityFaq(slug: {current: {eq: $slug}}) {
      id
      title
      _rawContent(resolveReferences: {maxDepth: 10})
      image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            fit: FILLMAX
            width: 600
          )
        }
      }
    }
  }
`;
