import { graphql } from "gatsby";
import React from "react";
import FaqCard from "../components/FaqCard";
import styled from "styled-components";
import Seo from "../components/Seo";

const FaqGridStyles = styled.div`
  .faqs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 22px;
  }
`;

export default function FaqsPage({ data }) {
  const faqs = data.faqs.nodes;

  return <>
  <Seo title={'Frequently Asked Questions'} description={'Get your questions answered before applying to the school.'}></Seo>
  <FaqGridStyles>
    <h1>Frequently Asked Questions</h1>
    <div className="faqs-container">
      {faqs.map((faq) => {
        return <FaqCard key={faq.id} faq={faq} />;
      })}
    </div>
  </FaqGridStyles>
  </>
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
