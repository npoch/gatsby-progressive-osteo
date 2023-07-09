import React from "react";
import styled from "styled-components";
import ClinicMonth from "./ClinicMonth";

const ClinicGridStyles = styled.section`
  border: 2px solid grey;
  padding: 8px;
  margin-top: 20px;
  border-radius: 8px;
  h3 {
    grid-column: 2fr;
    font-weight: 700;
  }
  .month-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-gap: 12px;
  }
`;


export default function ClinicGrid({data}){
  // console.log("clinic grid", data)

  return <ClinicGridStyles>
    <h3>{data.year}</h3>
    <div className="month-grid">
      {data.months.map((singleMonth, i) => <ClinicMonth key={`${singleMonth}-${i}`} data={singleMonth} />)}
    </div>
  </ClinicGridStyles>
}