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

const OurPhilosophyStyles = styled.div``;

export default function PhilosophyPage({data}){
  console.log(data);
  const content = data.page._rawContent;
  return <OurPhilosophyStyles>
    <h1>THIS IS THE PHILOSOPHY PAGE</h1>
    <BlockContent blocks={content} serializers={serializers} />
  </OurPhilosophyStyles>
}

export const query = graphql`
  query OurPhilosophyQuery {
    page: sanityPage(slug: {current: {eq: "philosophy"}}) {
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