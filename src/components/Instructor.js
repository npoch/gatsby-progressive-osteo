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
  grid-template-rows: 60px auto 1fr 1fr 50px;
  grid-gap: 10px;
  i-name {
    margin-bottom: 10px;
    font-weight: bold;
  }
  p {
    margin: 0;
  }
  .i-title {
    font-weight: bold;
  }
  .i-creds {
    color: darkgrey;
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
  <h2 className='i-name'>{instructor.name}</h2>
  <GatsbyImage image={instructor.image.asset.gatsbyImageData} alt={instructor.name}/>
  <p className='i-title'>{instructor.title}</p>
  <p className='i-creds'>{instructor.credentials}</p>
  <Link to={`/instructor/${instructor.slug.current}`}>
    Read Details
  </Link>
</InstructorStyles>
}