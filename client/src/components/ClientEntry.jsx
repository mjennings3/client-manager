import React, { useState, useEffect } from 'react'
import UpcomingJobs from './UpcomingJobs.jsx'
import axios from 'axios'

export default function ClientEntry({ currentClient, showJob, updateCurrentClientId, deleteButtons, removeFromClients }) {
  const [client, setClient] = useState(currentClient)

  function removeClient() {
    removeFromClients(currentClient.client_id);
    axios.delete(`/clients/${currentClient.client_id}`);
  }

  return (
    <>
    <tr>
      <td>{client.firstName} {client.lastName}</td>
      <td>{client.streetAddress} {client.city}, {client.state} {client.zipCode}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td className="add-job-button-td">
        {deleteButtons ?
          <button className="add-job-button" onClick={() => {updateCurrentClientId(); removeClient();}}>-</button>
          :
          <button className="add-job-button" onClick={() => {showJob(true); updateCurrentClientId();}}>+</button>
        }
      </td>
      <td className="jobs-td">
        <UpcomingJobs
          client_id={client.client_id}
          phone={client.phone}
          firstName={client.firstName}
        />
      </td>
    </tr>
    </>
  )
}