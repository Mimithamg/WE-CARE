import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TimePicker from 'react-time-picker';

const MedicationForm = ({ addMedication }) => {
  const [medication, setMedication] = useState('');
  const [time, setTime] = useState('10:00');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!medication) {
      alert('Please enter a medication name');
      return;
    }
    const newMedication = {
      id: Math.floor(Math.random() * 10000) + 1,
      medication,
      time
    };
    addMedication(newMedication);
    setMedication('');
    setTime('10:00');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Medication Name</label>
        <input type="text" placeholder="Enter medication name"
          value={medication} onChange={(e) => setMedication(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Time</label>
        <TimePicker
          onChange={setTime}
          value={time}
          disableClock={true}
          clearIcon={null}
        />
      </div>
      <input type="submit" value="Add Medication" className="btn btn-block" />
    </form>
  );
};

export default MedicationForm;
