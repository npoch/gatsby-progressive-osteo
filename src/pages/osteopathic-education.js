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

const OurCurriculumStyles = styled.div``;

export default function OsteopathicEducationPage({data}){
  const content = data.page._rawContent;
  return <>
  <Seo title={'Our Curriculum'} description={'Review our comprehensive curriculum that meets CSA Group standards.'}></Seo>
  <OurCurriculumStyles>
  <h1>Our Curriculum</h1>
  <h2>{data.page.name}</h2>
  <BlockContent blocks={content} serializers={serializers} />
  </OurCurriculumStyles>
  </>
}

export const query = graphql`
  query OurCurriculumQuery {
    page: sanityPage(slug: {current: {eq: "osteopathic-education"}}) {
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