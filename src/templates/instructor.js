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


export default function SingleInstructor({data}){
  console.log({data});
  const instructor = data.instructor;
  return (
    <SingleInstructorStyles>
      {/* <SEO title={instructor.name} image={instructor.image.asset.url} /> */}
    <h1>{instructor.name}</h1>
    <div className='single-instructor'>
      <div className='bio-pic'>
        <GatsbyImage image={instructor.image.asset.gatsbyImageData} alt={instructor.name} />
        <p>{instructor.credentials}</p>
        <p>{instructor.title}</p>
      </div>
      <BlockContent blocks={instructor._rawBio} serializers={serializers} />
    </div>
    </SingleInstructorStyles>
  )
}

export const query = graphql`
  query ($slug: String!) {
  instructor: sanityInstructor(slug: {current: {eq: $slug}}) {
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
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          fit: FILLMAX
          width: 600
        )
      }
    }
  }
}
`;