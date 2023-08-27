import { graphql } from 'gatsby';
import React from 'react';
import PersonCard from '../components/PersonCard';
import styled from 'styled-components';
import Seo from '../components/Seo';

const InstructorGridStyles = styled.div`
  .supervisors-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 22px;
  }
`;

export default function InstructorsPage({data}) {
  const supervisors = data.supervisors.nodes[0].supervisors;
  // console.log(supervisors)

  return <>
  <Seo title={'Clinic Supervisors'} description={'Meet our Clinic Supervisors'}></Seo>
  <InstructorGridStyles>
    <h1>Clinic Supervisors:</h1>
    <div className='supervisors-container'>
      {supervisors.map((supervisor) => {
        return <PersonCard key={supervisor.id} person={supervisor} group='clinic-supervisor' />
      })}
    </div>
  </InstructorGridStyles>
  </>
}

export const InstructorsPageQuery = graphql`
  query InstructorsQuery {
  supervisors: allSanityCSupervisor {
    nodes {
      supervisors {
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
      }
    }
  }
}
`;