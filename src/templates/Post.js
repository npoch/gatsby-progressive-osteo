import React from 'react';
import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Seo from '../components/Seo';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    youtube: ({node}) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<LiteYouTubeEmbed id={id} />)
    },
  },
}

const SinglePostStyles = styled.div`

`;


export default function SinglePost({data}){
  const post = data.post;
  console.log(post)
  const description = post.excerpt;
  // console.log(post)
  return <>
    <Seo title={post.seoTitle || post.title} description={description} image={post?.seoImage?.asset?.url || null}></Seo>
    <SinglePostStyles>
      <h1>{post.title}</h1>
      <BlockContent blocks={post._rawContent} serializers={serializers} />
    </SinglePostStyles>
  </>
  
}

export const query = graphql`
  query ($slug: String!) {
  post: sanityPost(slug: {current: {eq: $slug}}) {
    title
    id
    _rawContent(resolveReferences: {maxDepth: 10})
    author {
      title
      name
      image {
        asset {
          gatsbyImageData(fit: FILLMAX)
        }
      }
    }
    excerpt
    mainImage {
      asset {
        gatsbyImageData(fit: FILLMAX)
      }
    }
    seoTitle
    seoKeywords
    seoImage {
      asset {
        url
        gatsbyImageData(fit: FILLMAX)
      }
    }
  }
}
`;