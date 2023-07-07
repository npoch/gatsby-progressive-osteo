import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";

const MiniCardStyles = styled.div`
  
`;

export default function MiniCard({title, link}){
  // console.log(data, link)
  return (<MiniCardStyles>
    <Link to={link}>{title}</Link>
  </MiniCardStyles>)
}