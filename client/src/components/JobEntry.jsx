import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function JobEntry({ job, phone, firstName }) {

  function sendSMS(bool) {
    bool ?
    axios.post(`/sms/${phone}`, { name: firstName, date: job.date })
    .then(() => console.log('SMS SENT.'))
    .catch(() => console.error('SMS SEND FAILED.'))
    :
    console.log('SMS SEND CANCELLED.')
  }
  return (
    <>
    <p>{job.date}</p>
    <button onClick={() => sendSMS(confirm('Are you sure you want to send an SMS reminder?')) }>SMS Reminder</button>
    </>
  )
}