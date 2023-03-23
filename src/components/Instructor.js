import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';

const InstructorStyles = styled.div`
  border: 2px silver solid;
  padding: 20px;
  display: grid;
  align-items: center;
  h2 {
    margin-bottom: 10px;
    
  }
  .img-placeholder {
    background-color: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
  }
`;

export default function InstructorCard({instructor}) {
  console.log(instructor)
  return <InstructorStyles>
  <h2>{instructor.name}</h2>
  <GatsbyImage image={instructor.image.asset.gatsbyImageData} alt={instructor.name}/>
  <p>{instructor.title}</p>
  <p>{instructor.credentials}</p>
  <Link to={`/instructor/${instructor.slug.current}`}>
    Read Details
  </Link>
</InstructorStyles>
}