import React from 'react';
import PageTitle from 'components/PageTitle';
import speakings from 'bundled/speakings.json';
import formatDate from 'util/time/formatDate';
import Octicon, {Megaphone} from '@githubprimer/octicons-react'
import './speakings.css';

const EventRow = ({title, eventDate, eventName, link}) => (
  <tr>
    <td>{eventName}</td>
    <td>{title}</td>
    <td>{formatDate(new Date(eventDate))}</td>
    <td><a href={link}>View</a></td>
  </tr>
);
const toRow = gig => <EventRow {...gig} />

const EventTable = () => (
  <div className='events--container'>
    <table className='events'>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Title</th>
          <th>Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        { speakings.map(toRow) }
      </tbody>
    </table>
  </div>
)

export default () => (
  <div>
    <PageTitle>
      <Octicon icon={Megaphone} size='large' />
      Speaking
    </PageTitle>
    <EventTable />
  </div>
)
