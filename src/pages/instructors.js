import { graphql } from 'gatsby';
import React from 'react';
import InstructorCard from '../components/Instructor';
import styled from 'styled-components';
import Seo from '../components/Seo';

const InstructorGridStyles = styled.div`
  .instructors-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 22px;
  }
`;

export default function InstructorsPage({data}) {
  const instructors = data.instructors.nodes;

  return <>
  <Seo title={'Instructors'} description={'Meet our distinguished faculty'}></Seo>
  <InstructorGridStyles>
    <h1>Instructors:</h1>
    <div className='instructors-container'>
      {instructors.map((instructor) => {
        return <InstructorCard key={instructor.id} instructor={instructor} group='instructor' />
      })}
    </div>
  </InstructorGridStyles>
  </>
}

export const InstructorsPageQuery = graphql`
  query InstructorsQuery {
  instructors: allSanityInstructor(sort: {ordinal: ASC}) {
    nodes {
      id
      name
      credentials
      title
      slug {
        current
      }
      image {
        asset {
          gatsbyImageData(
            fit: FILLMAX
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 700
          )
        }
      }
      ordinal
    }
  }
}
`;