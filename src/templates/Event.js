import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const SingleEventStyles = styled.div`

`;


export default function SingleEvent({data}){
  const event = data.event;
  return (
    <SingleEventStyles>
      {/* <SEO title={instructor.name} image={instructor.image.asset.url} /> */}
      {/* <h1>{event.title}</h1> */}
    </SingleEventStyles>
  )
}

export const query = graphql`
  query ($slug: String!) {
  event: sanityEvent(slug: {current: {eq: $slug}}) {
    # id
    title
    slug {
      current
    }
  }
}
`;