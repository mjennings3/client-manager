import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import  { useForm } from 'react-hook-form'
import axios from 'axios'

import "react-datepicker/dist/react-datepicker.css";

export default function NewJobForm({ currentClientId, updateJobs, showJob }) {
  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
  const [date, setDate] = useState(new Date());

  const addJob = data => {
    let date = ((data.split('T').join(' ')).slice(1, 20)); // I suffer for my art
    updateJobs(date)
    axios.post(`/clients/${currentClientId}/jobs`, { date })
  }

  const onSubmit = data => {
    addJob(JSON.stringify(data));
    showJob(false);
  }

  return (
    <div className="modal-background">
    <div className="modal-wrapper add-job">
    <h2 className="form-header">Add Job</h2>
    <button className="close-form" onClick={() => showJob(false)}>X</button>
    <div className="add-job-form">
    <DatePicker
      className="job-date-picker job-form-input"
      selected={date}
      onChange={(date) => setDate(date)}
      showTimeSelect
      timeIntervals={15}
      dateFormat="P p"
    />
    <br/>
    <select className="job-type-dropdown job-form-input">
      <option>Free Quote</option>
      <option>Washing</option>
      <option>Other</option>
    </select>
    <button className="submit-button job-form-input" onClick={() => onSubmit(date)}>Submit</button>
    </div>
    </div>
    </div>
  );
}