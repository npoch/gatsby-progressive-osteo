import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import MiniCard from "./MiniCard";
import { GatsbyImage } from "gatsby-plugin-image";

const FeatureCardStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    justify-items: center;
    width: clamp(290px, 30%, 400px);
    border: 2px solid var(--grey);
    padding: 1em;
    border-radius: 1.5em;
    grid-template-rows: 90px auto 1fr 60px;
    min-height: 600px;
    margin: 0 7px;
    .title {
      text-wrap: balance;
      text-align: center;
    }
    .gatsby-image-wrapper {
      position: relative;
      top: 0;
      img {
        padding: 3rem;
      }
    }
    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      text-wrap: balance;
      text-align: center;
    }
    .button {
      display: inline-block;
      padding: 0.5em 1em;
      margin: 10px;
      border-radius: 1.5em;
      background: var(--drk-blue);
      transition-duration: 0.5s;
      /* position: relative;
      bottom: 0; */
    }
    .button:hover {
      background-color: var(--teal);
      color: var(--white);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    a.button {
      text-decoration: none;
      color: var(--white);
    }

`;

export default function FeatureCard({ title, block, src, cta, page, data, defaultText }) {
  // console.log(title, data)

  if(data == null || Object.keys(data).length < 1) {
    return (
      <FeatureCardStyles>

          <h3 className="title">{title}</h3>
          <GatsbyImage
            alt={src.name}
            image={src.image.asset.gatsbyImageData}
          />
          <div className="link-list">
            <p>{defaultText}</p>
          </div>
          <Link to={page} className="button">
            {cta}
          </Link>

      </FeatureCardStyles>
    );
  }

  return (
    <FeatureCardStyles>
        <h3 className="title">{title}</h3>
        <GatsbyImage
            alt={src.name}
            image={src.image.asset.gatsbyImageData}
          />
        <div className="link-list">
          {function featureCards() {
            if (block === 'clinic'){
              return data.map((date, i) => <MiniCard key={`${date.dateString}-${i}`} title={date.dateString} link={page} />)
            } else if (block === 'events'){
              return data.map((event, i) => <MiniCard key={`${event.start}-${i}`} title={event.title} link={`event/${event.slug.current}`} />)
            } else if (block === 'announcements') {
              return data.map((announce, i) => <MiniCard key={`${announce.slug.current}-${i}`} title={announce.title} link={`announcement/${announce.slug.current}`} />)
            }
          }()
          }
        </div>
        <Link to={page} className="button">
          {cta}
        </Link>
    </FeatureCardStyles>
  );
}
