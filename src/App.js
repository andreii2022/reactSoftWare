import React, { useState } from 'react';
import './App.css';
import data from './mock-data.json'



function App() {

const [contacts, setContact] = useState(data)

  return (
<div className='app-container'>
  <table >
    <thead>
      <tr>
        <th>Company</th>   
        <th>Model</th>
        <th>VIN</th>
        <th>Color</th>
        <th>Year</th>
        <th>Price</th>
        <th>Availability</th>
        
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <tr>
        <td>{contact.car}</td>        
        <td>{contact.car_model}</td>
        <td>{contact.car_vin}</td>
        <td>{contact.car_color}</td>
        <td>{contact.car_model_year}</td>
        <td>{contact.price}</td>
        <td>{contact.availability}</td>
       
      </tr>
      ))}
      
    </tbody>
  </table>
</div>




  )
}

export default App;






