import React from 'react';
import { FaTimes } from 'react-icons/fa';

function MedicationList({ medications, deleteMedication }) {
  return (
    <ul>
      {medications.map((medication, index) => (
        <li key={medication.id}>
          {medication.name} ({medication.time})
          <button onClick={() => deleteMedication(index)}><FaTimes /></button>
        </li>
      ))}
    </ul>
  );
}

export default MedicationList;
