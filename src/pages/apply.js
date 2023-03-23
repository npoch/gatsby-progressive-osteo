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

const ApplyStyles = styled.div``;

export default function ApplyPage({data}){
  const content = data.page._rawContent;
  return <ApplyStyles>
  <h1>{data.page.name}</h1>
  <BlockContent blocks={content} serializers={serializers} />
  </ApplyStyles>
}

export const query = graphql`
  query ApplyPageQuery {
    page: sanityPage(slug: {current: {eq: "apply"}}) {
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