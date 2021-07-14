import React, { useState, useEffect } from 'react'
import NewCustomerForm from './NewCustomerForm.jsx'
import NewJobForm from './NewJobForm.jsx'
import ClientEntry from './ClientEntry.jsx'
import axios from 'axios'

export default function App() {
  const [showNewCustomerForm, showForm] = useState(false);
  const [showNewJobForm, showJob] = useState(false);
  const [currentClientId, setCurrentClientId] = useState(null);
  const [clients, setClients] = useState([]);
  const [deleteButtons, setDeleteButtons] = useState(false);

  function getClients() {
    axios.get('/clients')
  }

  function updateClients(object) {
    setClients([...clients, object])
  }

  function updateJobs() {
    console.log('not done')
  }

  function updateCurrentClientId(id) {
    setCurrentClientId(id);
  }

  function removeFromClients(id) {
    let breakVar = false;
    for (let i in clients) {
      if (clients[i].client_id === id) {
        console.log('id ', id, ' clientid ', clients[i].client_id)
        clients.splice(i, 1)
        setClients(clients)
        breakVar = true;
      }
      if (breakVar) break;
    }
  }

  useEffect(() => {
    axios.get('/clients')
    .then(data => {
      setClients(data.data)
    })
    }, []
  );

  return (
    <>
    {/* <h1>Splendid Window Cleaning</h1> */}
    <>
    <button onClick={() => showForm(true)}>Create new client</button>
    <button onClick={() => setDeleteButtons(!deleteButtons)}>{deleteButtons ? 'Add Jobs' : 'Delete Clients'}</button>
    {showNewJobForm ?
      <>
      <NewJobForm currentClientId={currentClientId} updateJobs={updateJobs} showJob={showJob} />
      </>
      :
      null
    }
    </>
    <>
    {showNewCustomerForm ?
      <NewCustomerForm updateClients={updateClients} showForm={showForm} />
      :
      null
    }
    </>
      <>
      <div className="clients">
      <table>
        <thead>
        <tr className="table-header">
          <td><h3>Client</h3></td>
          <td><h3>Address</h3></td>
          <td><h3>Phone</h3></td>
          <td><h3>Email</h3></td>
        </tr>
        </thead>
        <tbody>
        {
          clients.map((client, key) => (
            <ClientEntry
              key={key}
              className={client.client_id}
              currentClient={client}
              showJob={showJob}
              updateCurrentClientId={() => updateCurrentClientId(client.client_id)}
              deleteButtons={deleteButtons}
              removeFromClients={removeFromClients}
            />
          ))
        }
        </tbody>
      </table>
      </div>
      </>
    </>
  )
}