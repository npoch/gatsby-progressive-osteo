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

const SingleAnnouncementStyles = styled.div`

`;


export default function SingleAnnouncement({data}){
  const announcement = data.announcement;
  return (
    <SingleAnnouncementStyles>
      {/* <SEO title={instructor.name} image={instructor.image.asset.url} /> */}
      <h1>{announcement.title}</h1>

    </SingleAnnouncementStyles>
  )
}

export const query = graphql`
  query ($slug: String!) {
  announcement: sanityAnnouncement(slug: {current: {eq: $slug}}) {
    id
    title
    slug {
      current
    }
  }
}
`;