import React from "react";
import styled from "styled-components";
import FeatureCard from "../components/FeatureCard";
// import { Link } from "gatsby";

const FeaturedStyles = styled.div`
  padding: 10rem 0;
  .description {
    text-align: center;
  }
  .featured-container {
    /* display: grid; */
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    /* grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-flow: column; */
    padding: 2rem 0;
  }
`;

export default function Featured(props) {
  const { announcements, clinicDates, events, images} = props;
  // console.log({announcements, clinicDates, events, images});
  return (
    <FeaturedStyles>
      <section className="description">
        <h2>Progressive education. Progressive practitioners.</h2>
        <p>On the cutting edge of osteopathy.</p>
      </section>
      <div className="featured-container">
        <FeatureCard
          title="Get the latest news and announcements"
          block="announcements"
          src={images.ia}
          cta="Find out more"
          page="/announcements-events"
          data={announcements}
          defaultText="Check back soon for announcements"
          />
        <FeatureCard
          title="Experience our unique curriculum for yourself"
          block="events"
          src={images.ie}
          cta="Open house schedule"
          page="/announcements-events"
          data={events}
          defaultText="Check back soon for new events"
          />
        <FeatureCard
          title="Get treated by dedicated trainees at our student clinic"
          block="clinic"
          src={images.ic}
          cta="Book now"
          page="/student-clinic"
          data={clinicDates}
          defaultText="Check back soon for new dates"
        />
      </div>
    </FeaturedStyles>
  );
}
