import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';



export default function SingleInstructor({data}){
  // const instructor = data.instructor;

  return (<p>single Instructor</p>
    // <SingleInstructorStyles>
    //   <SEO title={instructor.name} image={instructor.image.asset.url} />
    // <h1>{instructor.name}</h1>
    // <div className='single-instructor'>
    //   <div className='bio-pic'>
    //     <GatsbyImage image={instructor.image.asset.gatsbyImageData} alt={instructor.name} />
    //     <p>{instructor.credentials}</p>
    //     <p>{instructor.distinction}</p>
    //   </div>
    // {instructor.bio.map((para, i) => {
    //   return <p key={i}>{para.children[0].text}</p>
    // })}
    // </div>
    // </SingleInstructorStyles>
  )
}

