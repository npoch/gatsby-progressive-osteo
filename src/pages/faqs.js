import { graphql } from "gatsby";
import React from "react";
import FaqCard from "../components/FaqCard";
import styled from "styled-components";

const FaqGridStyles = styled.div`
  .faqs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 22px;
  }
`;

export default function FaqsPage({ data }) {
  const faqs = data.faqs.nodes;

  return (
    <FaqGridStyles>
      <h1>Frequently Asked Questions</h1>
      <div className="faqs-container">
        {faqs.map((faq) => {
          return <FaqCard key={faq.id} faq={faq} />;
        })}
      </div>
    </FaqGridStyles>
  );
}

export const FaqsPageQuery = graphql`
  query FaqsQuery {
    faqs: allSanityFaq {
      nodes {
        id
        title
        slug {
          current
        }
      }
    }
  }
`;
