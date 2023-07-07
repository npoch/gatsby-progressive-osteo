import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import LinkCard from '../components/LinkCard';
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

const FunctionalNeurologyStyles = styled.div``;

export default function FunctionalNeurologyPage({data}){
  const content = data.page._rawContent;
  const links = data.page.links;
  return <>
  <Seo title={'Functional Neurology Courses'} description={'Functional neurology is a treatment discipline for various neurological disorders.'}></Seo>
  <FunctionalNeurologyStyles>
  <h1>{data.page.name}</h1>
  <BlockContent blocks={content} serializers={serializers} />
  <div className='link-list'>
    {links.map((link) => <LinkCard key={link._key} data={link}/>)}
  </div>
  </FunctionalNeurologyStyles>
  </>
}

export const query = graphql`
  query FunctionalNeurologyQuery {
    page: sanityPage(slug: {current: {eq: "functional-neurology"}}) {
      id
      name
      slug {
        current
      }
      links {
        _key
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