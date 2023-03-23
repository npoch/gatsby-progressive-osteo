import { Link } from 'gatsby';
import React from 'react';

export default function AnnounceCard({announcement}) {
  return <Link to={`/announcement/${announcement.slug.current}`}>
  <h3>{announcement.title}</h3>
  </Link>
}