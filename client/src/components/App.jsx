import React, { useState, useEffect } from 'react'
import NewCustomerForm from './NewCustomerForm.jsx'

export default function App() {
  const [showNewCustomerForm, showForm] = useState(false);


  return (
    <>
    {showNewCustomerForm ?
    <>
    <button onClick={() => showForm(false)}>Back</button>
    <NewCustomerForm />
    </>
    :
    <button onClick={() => showForm(true)}>Create new client</button>
    }
    </>
  )
}