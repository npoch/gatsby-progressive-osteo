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

const PathophysiologyStyles = styled.div``;

export default function PathophysiologyPage({data}){
  const content = data.page._rawContent;
  return <PathophysiologyStyles>
  <h1>Pathophysiology Page</h1>
  <BlockContent blocks={content} serializers={serializers} />
  </PathophysiologyStyles>
}

export const query = graphql`
  query PathophysiologyQuery {
    page: sanityPage(slug: {current: {eq: "pathophysiology"}}) {
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