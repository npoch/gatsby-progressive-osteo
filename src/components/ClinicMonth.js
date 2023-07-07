import React from "react";
import styled from "styled-components";

const ClinicMonthStyles = styled.div`
  border: 1px solid grey;
  border-radius: 6px;
  /* width: fit-content; */
  padding: 0 12px;
  p > span {
    border-bottom: 3px solid black;
  }
  p {

  }
`;


export default function ClinicMonth({data}){
  console.log("clinic month", data)
  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  }
  function datestampToLocalDate(datestamp){
    return new Date(datestamp).toLocaleString("en-CA", {timeZone: "America/Toronto", dateStyle: "medium" , timeStyle: "short"});
  }
  function datestampToTime(datestamp){
    return new Date(datestamp).toLocaleTimeString("en-CA", {timeZone: "America/Toronto", hour: "numeric", minute: "numeric", timeZoneName: "short"});
  }
  return <ClinicMonthStyles>
  <p><span>{getMonthName(data.month)}</span></p>
  {/* {data.datecouple.map((date, i) => <p key={`${date.dateString}-${i}`}>{datestampToLocalDate(date.start)} - {datestampToTime(date.end)}</p>)} */}
  </ClinicMonthStyles>
}