import React, { useState, useEffect } from 'react'
import  { useForm } from 'react-hook-form'

export default function NewCustomerForm() {
  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input placeholder="First Name" {...register("firstName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Last Name" {...register("lastName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Street Address" {...register("streetAddress", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="City" {...register("city", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input defaultValue="NJ" placeholder="State" {...register("state", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Zip" {...register("zipCode", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Phone" {...register("phone", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      <input placeholder="Email" {...register("email", { required: false })} />

      <input type="submit" />
    </form>
  );
}