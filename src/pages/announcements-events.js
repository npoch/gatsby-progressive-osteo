import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import AnnounceCard from '../components/AnnounceCard';
import EventCard from '../components/EventCard';

const AandEPageStyles = styled.div`
  
`;

const SectionStyles = styled.section`

`;

export default function AnnouncementsEventsPage({data}){
  console.log(data);
  const events = data.events.nodes;
  const announcements = data.announcements.nodes;
  return <AandEPageStyles>
    <SectionStyles>
    <h2>Announcements</h2>
    {announcements.map((announcement) => {
      return <AnnounceCard key={announcement.id} announcement={announcement} />
    })}
    </SectionStyles>
    <SectionStyles>
    <h2>Events</h2>
    {events.map((event) => {
      return <EventCard key={event.id} event={event} />
    })}
    </SectionStyles>
    
  </AandEPageStyles>
}

export const query = graphql`
query MyQuery {
  events: allSanityEvent(sort: {start: ASC}) {
    nodes {
      title
      slug {
        current
      }
      id
    }
  }
  announcements: allSanityAnnouncement(sort: {_createdAt: ASC}, limit: 5) {
    nodes {
      id
      title
      slug {
        current
      }
    }
  }
}
`;