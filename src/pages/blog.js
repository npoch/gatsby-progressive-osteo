import { graphql } from 'gatsby';
import React from 'react';
import BlogCard from '../components/BlogCard';
import styled from 'styled-components';
import Seo from '../components/Seo';

const InstructorGridStyles = styled.div`
  .blog-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 22px;
  }
`;

export default function BlogListingPage({data}) {
  const posts = data.posts.nodes;
  // console.log(data);
  return <>
  <Seo title={'OAoPO Blog'} description={'Thought leadership in the world of osteopathy. See what sets us apart.'}></Seo>
  <InstructorGridStyles>
    <h1>Blog</h1>
    <div className='blog-container'>
      {posts.map((post) =>  <BlogCard key={post.id} data={post} />)}
    </div>
  </InstructorGridStyles>
  </>
}

export const BlogPostsQuery = graphql`
  query PostsQuery {
  posts: allSanityPost(sort: {_createdAt: ASC}) {
    nodes {
      id
      title
      author {
        name
      }
      slug {
        current
      }
      excerpt
    }
  }
}
`;