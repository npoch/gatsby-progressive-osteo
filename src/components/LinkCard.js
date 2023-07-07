import React from "react";
import styled from "styled-components";

const LinkCardStyles = styled.div`

`;

export default function LinkCard({data}){
  return <LinkCardStyles>
    <a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a>
  </LinkCardStyles>
}