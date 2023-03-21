import React from "react";
import styled from "styled-components";
import FeatureCard from "../components/FeatureCard";

const FeaturedStyles = styled.div`
  padding: 10rem 0;
  .description {
    text-align: center;
  }
  .featured-container {
    display: grid;
    grid-gap: 3.5em;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem 0;
  }
`;

export default function Featured({ data }) {
  return (
    <FeaturedStyles>
      <section className="description">
        <h2>Latest News and Important Announcements</h2>
        <p>Exciting things happening in the world of Osteopathy</p>
      </section>
      <div className="featured-container">
        <FeatureCard
          title="Announcements"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
          cta="Learn More"
          page="/announcements-events"
        />
        <FeatureCard
          title="Events"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
          cta="Learn More"
          page="/announcements-events"
        />
        <FeatureCard
          title="Student Clinic"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
          cta="Learn More"
          page="/student-clinic"
        />
      </div>
    </FeaturedStyles>
  );
}
