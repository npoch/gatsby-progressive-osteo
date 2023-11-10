import { graphql } from "gatsby";
import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import useLatestData from "../utils/useLatestData";
import Seo from '../components/Seo';

export default function IndexPage({ data }) {
  const today = new Date().toISOString().split('T')[0];
  const { announcements, clinicDates, events} = useLatestData(today);
  // console.log({clinicDates});
  const { logo, announceLogo, eventLogo, clinicLogo } = data;

  return (
    <>
      <Seo title={'Home'}></Seo>
      <Hero logo={logo} />
      <Featured announcements={announcements} clinicDates={clinicDates} events={events} images={{ia: announceLogo, ie: eventLogo, ic: clinicLogo}} /> 
    </>
  );
}

export const IndexPageQuery = graphql`
  query GetLogo {
    logo: sanityLogo(name: { eq: "progressive osteopathy logo" }) {
      name
      image {
        asset {
          url
          gatsbyImageData(
            fit: FILLMAX
            layout: CONSTRAINED
            width: 800
            placeholder: BLURRED
          )
        }
      }
    }
    announceLogo: sanityLogo(name: { eq: "announcement" }) {
      name
      image {
        asset {
          gatsbyImageData(
            fit: FILL
            layout: CONSTRAINED
            width: 800
            placeholder: BLURRED
          )
        }
      }
    }
    eventLogo: sanityLogo(name: { eq: "event" }) {
      name
      image {
        asset {
          gatsbyImageData(
            fit: FILL
            layout: CONSTRAINED
            width: 800
            placeholder: BLURRED
          )
        }
      }
    }
    clinicLogo: sanityLogo(name: { eq: "clinic" }) {
      name
      image {
        asset {
          gatsbyImageData(
            fit: FILL
            layout: CONSTRAINED
            width: 800
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;
