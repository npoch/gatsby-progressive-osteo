import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const StudentClinicStyles = styled.div``;

export default function StudentClinicPage({data}){
  const content = data.page._rawContent;
  // console.log(data);
  return <StudentClinicStyles>
  <h1>{data.page.name}</h1>
  <BlockContent blocks={content} serializers={serializers} />
  </StudentClinicStyles>
}

export const query = graphql`
  query ClinicPageQuery {
    page: sanityPage(slug: {current: {eq: "student-clinic"}}) {
    id
    name
    slug {
      current
    }
    links
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