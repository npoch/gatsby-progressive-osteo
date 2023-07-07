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

const ApplyStyles = styled.div`
  .iframe.gform {
    width: 100%;
    height: 100vh;
    min-height: 1000px;
  }
`;

export default function ApplyPage({data}){
  const content = data.page._rawContent;
  return <>
  <Seo title={'Apply to the school'} description={'Launch your new, rewarding career in osteopathy, today.'}></Seo>
  <ApplyStyles>
  <h1>{data.page.name}</h1>
  <BlockContent blocks={content} serializers={serializers} />
  <iframe title="OAoPO Registration Google Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdRP9_mp3EHT20IRUzA8t82n0Ecrn6lJD79IibCeGkt3t6FOQ/viewform#toolbar=0" class="iframe gform" frameBorder="0" ></iframe>
  </ApplyStyles>
  </>
}

export const query = graphql`
  query ApplyPageQuery {
    page: sanityPage(slug: {current: {eq: "apply"}}) {
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