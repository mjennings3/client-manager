import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function JobEntry({ job }) {

  function sendSMS(bool) {
    console.log(bool ? 'SMS SENT.' : 'SMS SEND CANCELLED.')
  }
  return (
    <>
    <p>{job.date}</p>
    <button onClick={() => sendSMS(confirm('Are you sure you want to send an SMS reminder?')) }>SMS Reminder</button>
    </>
  )
}