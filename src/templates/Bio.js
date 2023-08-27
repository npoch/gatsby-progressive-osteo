import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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

const SingleInstructorStyles = styled.div`
  .bio-pic {
  max-width: 300px;
  height: fit-content;
  float: right;
  margin-left: 50px;
  margin-bottom: 30px;
  text-align: right;
}
`;


export default function SingleBio({data}){
  // console.log({data});
  const person = data.person;
  return <>
    <Seo title={person.name} description={person.title} image={person.image.asset.url || ''}></Seo>
    <SingleInstructorStyles>
    <h1>{person.name}</h1>
    <div className='single-instructor'>
      <div className='bio-pic'>
        <GatsbyImage image={person.image.asset.gatsbyImageData} alt={person.name} />
        <p>{person.credentials}</p>
        <p>{person.title}</p>
      </div>
      <BlockContent blocks={person._rawBio} serializers={serializers} />
    </div>
    </SingleInstructorStyles>
  </>
  
}

export const query = graphql`
  query ($slug: String!) {
    person: sanityPerson(slug: {current: {eq: $slug}}) {
      id
      name
      title
      credentials
      _rawBio(resolveReferences: {maxDepth: 10})
      # bio {
      #   children {
      #     text
      #     _type
      #     _key
      #   }
      # }
      image {
        asset {
          url
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            fit: FILLMAX
            width: 600
          )
        }
      }
  }
  # instructor: sanityInstructor(slug: {current: {eq: $slug}}) {
  #   id
  #   name
  #   title
  #   credentials
  #   _rawBio(resolveReferences: {maxDepth: 10})
  #   # bio {
  #   #   children {
  #   #     text
  #   #     _type
  #   #     _key
  #   #   }
  #   # }
  #   image {
  #     asset {
  #       url
  #       gatsbyImageData(
  #         placeholder: BLURRED
  #         layout: FULL_WIDTH
  #         fit: FILLMAX
  #         width: 600
  #       )
  #     }
  #   }
  # }
}
`;
