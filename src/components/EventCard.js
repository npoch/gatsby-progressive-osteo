import { Link } from 'gatsby';
import React from 'react';

export default function EventCard({event}) {
  return <Link to={`/event/${event.slug.current}`}>
  <h3>{event.title}</h3>
  </Link>
}