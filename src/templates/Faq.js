import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import Seo from "../components/Seo";
import getYouTubeID from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

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
};

const SingleFaqStyles = styled.div`
  
`;

export default function SingleFaq({ data }) {
  const faq = data.faq;
  return <>
    <Seo title={faq.title}></Seo>
    <SingleFaqStyles>
      <h1>{faq.title}</h1>
      <BlockContent blocks={faq._rawContent} serializers={serializers} />
    </SingleFaqStyles>
  </>
}

export const query = graphql`
  query ($slug: String!) {
    faq: sanityFaq(slug: {current: {eq: $slug}}) {
      id
      title
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`;
