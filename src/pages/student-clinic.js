import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import ClinicGrid from '../components/ClinicGrid';
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

const StudentClinicStyles = styled.div`
  .iframe.gform {
    width: 100%;
    height: 100vh;
    min-height: 1700px;
  }
`;

export default function StudentClinicPage({data}){
  //(sort: [{year: ASC}, {month: {month: ASC}}, {month: {datecouple:{dateString: ASC}}}])
  const content = data.page._rawContent;
  const dates = [
    {
      "year": "2023",
      "months": [
        {
          "month": "07",
          "datecouple": [
            {
              "dateString": "2023-07-13",
              "start": "2023-07-09T19:30:07.705Z",
              "end": "2023-07-14T00:00:00.000Z"
            },
            {
              "dateString": "2023-07-27",
              "start": "2023-07-27T19:30:00.000Z",
              "end": "2023-07-28T00:00:00.000Z"
            }
          ]
        },
        {
          "month": "08",
          "datecouple": [
            {
              "dateString": "2023-08-17",
              "start": "2023-08-17T19:00:00.000Z",
              "end": "2023-08-18T00:00:00.000Z"
            },
            {
              "dateString": "2023-08-31",
              "start": "2023-08-31T19:30:00.000Z",
              "end": "2023-09-01T00:00:00.000Z"
            }
          ]
        }
      ]
    }
  ];

  return <>
    <Seo title={'Student Clinic Information'} description={'Get treated by dedicated trainees at our student clinic.'}></Seo>
    <StudentClinicStyles>
    <h1>{data.page.name}</h1>
    <BlockContent blocks={content} serializers={serializers} />
    <h2>Student Clinic Calendar</h2>
    {dates.map((year, i) => <ClinicGrid key={`${year}-${i}`} data={year} />)}
    <iframe title="Student Clinic Appointment Request" src="https://docs.google.com/forms/d/18Td05OIlAykvN6QH6s0CzanPZymx4YyKE20T1m823cw/viewform?ts=63596245&amp;edit_requested=true#toolbar=0" className="iframe gform" frameBorder="0" ></iframe>
    </StudentClinicStyles>
  </>
}

export const query = graphql`
  query ClinicPageQuery {
    page: sanityPage(slug: {current: {eq: "student-clinic"}}) {
    id
    name
    slug {
      current
    }
    links {
      _key
        _type
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
  # dates: allSanityClinic{
  #   nodes {
  #     year
  #     months {
  #       month
  #       datecouple {
  #         dateString
  #         start
  #         end
  #       }
  #     }
  #   }
  # }
}
`;