import React, { useState, useEffect } from 'react'
import  { useForm } from 'react-hook-form'
import axios from 'axios'

export default function NewCustomerForm({ updateClients, showForm }) {
  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();

  const addClient = data => {
    axios.post('/clients', data)
  }

  const onSubmit = data => {
    console.log(data);
    updateClients(data);
    addClient(data);
    reset();
    showForm(false);
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <span className="modal-background">
    <div className="modal-wrapper">
    <h2 className="form-header">Add Client</h2>
    <button className="close-form" onClick={() => showForm(false)}>X</button>

    <form className="add-client-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input placeholder="First Name" {...register("firstName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Last Name" {...register("lastName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input placeholder="Street Address" {...register("streetAddress", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input placeholder="City" {...register("city", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input defaultValue="NJ" placeholder="State" {...register("state", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Zip" {...register("zipCode", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input placeholder="Phone" {...register("phone", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Email" {...register("email", { required: false })} />
      <br/>
      <input type="submit" className="submit-button" />
    </form>
    </div>
    </span>
  );
}