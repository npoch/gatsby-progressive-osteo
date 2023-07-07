import React from 'react';
import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import Seo from '../components/Seo';
import getYouTubeID from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    youtube: ({node}) => {
      const { url } = node
      const id = getYouTubeID(url)
      return (<LiteYouTubeEmbed id={id} />)
    },
  },
}

const SingleAnnouncementStyles = styled.div`

`;


export default function SingleAnnouncement({data}){
  const announcement = data.announcement;
  return <>
    <Seo title={announcement.title}></Seo>
    <SingleAnnouncementStyles>
      <h1>{announcement.title}</h1>
      <BlockContent blocks={announcement._rawContent} serializers={serializers} />
    </SingleAnnouncementStyles>
  </>
  
}

export const query = graphql`
  query ($slug: String!) {
  announcement: sanityAnnouncement(slug: {current: {eq: $slug}}) {
    id
      title
      _rawContent(resolveReferences: {maxDepth: 10})
  }
}
`;