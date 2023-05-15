//import React from 'react';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import React, { useState } from 'react';


import 'react-notifications/lib/notifications.css';

function Home() {
    const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({ medName: '', medTime: '' });

  const handleMedNameChange = (event) => {
    setNewMedication((prevState) => ({ ...prevState, medName: event.target.value }));
  };

  const handleMedTimeChange = (event) => {
    setNewMedication((prevState) => ({ ...prevState, medTime: event.target.value }));
  };

  const handleAddMedication = () => {
    if (!newMedication.medName || !newMedication.medTime) {
      NotificationManager.warning('Please enter a medication name and time');
      return;
    }

    const now = DateTime.local();
    const [hour, minute] = newMedication.medTime.split(':');
    const reminderTime = now.set({ hour, minute });

    if (reminderTime <= now) {
      NotificationManager.warning('Please select a time in the future');
      return;
    }

    const newMed = {
      id: uuidv4(),
      medName: newMedication.medName,
      medTime: newMedication.medTime,
      reminderTime: reminderTime,
    };

    setMedications((prevState) => [...prevState, newMed]);
    setNewMedication({ medName: '', medTime: '' });

    NotificationManager.success(`Reminder set for ${newMed.medTime}`, `${newMed.medName} - Reminder`, 5000);

    setTimeout(() => {
      NotificationManager.info(`Time to take ${newMed.medName}!`, `${newMed.medName} - Reminder`, 5000);
    }, newMed.reminderTime.diff(now).milliseconds);
  };

  return (
    <div>
    <header className="App-header">
        <h1>WE CARE</h1>
        
        <div className='meddetails'>
        
        <div className="medication-form">
          <div>
            <label htmlFor="medNameInput">Medication Name:</label>
            <input className='placeholder' id="medNameInput" type="text" value={newMedication.medName} onChange={handleMedNameChange} />
          </div>
          <div>
            <label htmlFor="medTimeInput">Time to take:</label>
            <input className='placeholder' id="medTimeInput" type="time" value={newMedication.medTime} onChange={handleMedTimeChange} />
          </div>
          <button className='btn' onClick={handleAddMedication}>Add Medication</button>
        </div>
        <div className="medications-list">
         <h3>Medications</h3>
          {medications.map((med) => (
            
            <div key={med.id} className="medication-item">
              
              <p className='meditem'>{med.medName}</p>
              <p className='meditem'>Time to take: {med.medTime}</p>
            </div>
          ))}
        </div>
        </div>
      </header>
      <NotificationContainer />
      </div>
  );
}

export default Home;