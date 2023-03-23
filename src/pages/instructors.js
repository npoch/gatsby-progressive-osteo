import { graphql } from 'gatsby';
import React from 'react';
import InstructorCard from '../components/Instructor';
import styled from 'styled-components';

const InstructorGridStyles = styled.div`
  .instructors-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 22px;
  }
`;

export default function InstructorsPage({data}) {
  const instructors = data.instructors.nodes;

  return <InstructorGridStyles>
    <h1>INSTRUCTORS:</h1>
    <div className='instructors-container'>
      {instructors.map((instructor) => {
        return <InstructorCard key={instructor.id} instructor={instructor} />
      })}
    </div>
  </InstructorGridStyles>
}

export const InstructorsPageQuery = graphql`
  query InstructorsQuery {
    instructors: allSanityInstructor {
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
              width: 600
            )
          }
        }
      }
    }
  }
`;