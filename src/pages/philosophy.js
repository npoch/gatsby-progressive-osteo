import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
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

const OurPhilosophyStyles = styled.div``;

export default function PhilosophyPage({data}){
  // console.log(data);
  const content = data.page._rawContent;
  return <>
  <Seo title={'Our Philosophy'} description={'Our philosophy is simple – Provide outstanding education to produce exceptional talent.'}></Seo>
  <OurPhilosophyStyles>
    <h1>{data.page.name}:</h1>
    <BlockContent blocks={content} serializers={serializers} />
  </OurPhilosophyStyles>
  </>
}

export const query = graphql`
  query OurPhilosophyQuery {
    page: sanityPage(slug: {current: {eq: "philosophy"}}) {
      id
      name
      slug {
        current
      }
      links {
        _key
        _type
        name
        link
      }
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