import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const BlogCardStyles = styled.div`
  .blog-card-main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;  
    border: 1px solid lightgrey;
    border-radius: 4px;
    box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.1);
  }
  .blog-title {
    margin: 18px;
    text-decoration: none !important;
  }
  .blog-author {
    font-size: 24px;
    text-decoration: none !important;
    margin: 18px;

  }
  .blog-excerpt {

  }
`;

export default function BlogCard({data}){
  console.log(data);
  // const post = data.post;
  return <BlogCardStyles>
    <Link to={`${data.slug.current}`}>
      <div className="blog-card-main">
        <h2 className="blog-title">{data.title}</h2>
        <p><span className="blog-author">{data.author.name}</span></p>
      </div>
    <p className="blog-excerpt">{data.exerpt || ''}</p>
    </Link>

  </BlogCardStyles>
}