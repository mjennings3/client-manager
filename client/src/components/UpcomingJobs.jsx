import React, { useState, useEffect } from 'react'
import JobEntry from './JobEntry.jsx'
import axios from 'axios'

export default function UpcomingJobs({ client_id }) {
  const [jobs, setJobs] = useState([]);
  const [showJobs, setShowJobs] = useState(false);

  useEffect(() => {
    axios.get('/jobs')
    .then(data => { // THIS IS CONVERTING MYSQL DATETIME TO EPOCH THEN TO READABLE
      // for (let i in data.data) {
      //   var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      //   d.setUTCSeconds(Date.parse(data.data[i].date))
      //   console.log('d ',d)
      //   data.data[i].date = d.toString().slice(0, 11) +'@'+ d.toString().slice(17, 22)
      // }
      for (let i in data.data) {
        data.data[i].date = data.data[i].date.split('T');
        data.data[i].date = data.data[i].date.join(' @');
        data.data[i].date = data.data[i].date.slice(0, 17);
      }
      console.log('datadata ', data.data)
      setJobs(data.data.filter(job => job.client_id === client_id))
    })
    }, []
  );

  return (
    <>
      <h4 onClick={() => setShowJobs(!showJobs)}>{showJobs ? 'v' : '>'} Upcoming Jobs ({jobs.length})</h4>
      {showJobs ?
        jobs.map((job, key) => (
          <JobEntry
            job={job}
            key={key}
          />
        ))
        :
        null
      }
    </>
  )
}