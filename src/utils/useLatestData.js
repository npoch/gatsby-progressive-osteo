import { useEffect, useState } from "react";

export default function useLatestData() {
  // announcements
  const [announcements, setAnnouncements] = useState({});
  // events
  const [events, setEvents] = useState({});
  // clinic dates
  const [clinicDates, setClinicDates] = useState({});
  // Use Side effect to fetch data from sanity grql endpoint
  useEffect(function(today){
    fetch('https://msr25ovq.api.sanity.io/v1/graphql/production/default', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
        query {
          allSchoolSettings {
            events {
              title
              slug {
                current
              }
            }
            announcements {
              title
              slug {
                current
              }
            }
          }
          allDatecoupling(
            sort:{dateString: ASC}
            where: {dateString: {gte: "2023-07-03"}}
            limit: 3
            ){
            dateString
          }
        }`
      })
    })
    .then((res) => res.json())
    .then((result) => {
      // check for errors 
      // console.log("secondary: ", result);
      setClinicDates(result.data.allDatecoupling);
      setAnnouncements(result.data.allSchoolSettings[0].announcements);
      setEvents(result.data.allSchoolSettings[0].events);
    
    })
  }, []);

  return {
    events,
    announcements,
    clinicDates
  }
}