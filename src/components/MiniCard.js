import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";

const MiniCardStyles = styled.div`
  display: grid;
  grid-gap: 5px;
  .link {

    margin: 3px 0;
    padding: 3px 4px;
  }
`;

export default function MiniCard({title, link}){
  // console.log(data, link)
  return (<MiniCardStyles>
    <Link className="link" to={link}>{title}</Link>
  </MiniCardStyles>)
}