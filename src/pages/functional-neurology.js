import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const FunctionalNeurologyStyles = styled.div``;

export default function FunctionalNeurologyPage({data}){
  const content = data.page._rawContent;
  return <FunctionalNeurologyStyles>
  <h1>{data.page.name}</h1>
  <BlockContent blocks={content} serializers={serializers} />
  </FunctionalNeurologyStyles>
}

export const query = graphql`
  query FunctionalNeurologyQuery {
    page: sanityPage(slug: {current: {eq: "functional-neurology"}}) {
      id
      name
      slug {
        current
      }
      links
      images {
        asset {
          gatsbyImageData(
            fit: FILLMAX
            layout: FULL_WIDTH
            width: 500
            placeholder: BLURRED
          )
        }
      }
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`;