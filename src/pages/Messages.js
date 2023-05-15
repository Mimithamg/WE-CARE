import React from 'react';
import { useState } from 'react';
function Messages() {
    const [sideEffects, setSideEffects] = useState([]);

  async function handleSearchSubmit(event) {
    event.preventDefault();

    const apiKey = 'NhwQcIRH4L1YcqBO9YEzxUbg5wpUD8TUcSXibbbX';
    const searchValue = prompt('Enter the name of the medicine');
    const apiUrl = `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:${searchValue}&count=patient.reaction.reactionmeddrapt.exact&api_key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const sideEffects = data.results.map(result => result.term);
      setSideEffects(sideEffects);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className='messages'>
      <h1 style={{color:'white'}}>WE CARE</h1>
      <div>
      <form onSubmit={handleSearchSubmit}>
        <button type="submit">Search</button>
      </form>
      {sideEffects.length > 0 &&
        <ul style={{color:'white'}}>
          {sideEffects.map(sideEffect => (
            <li key={sideEffect}>{sideEffect} </li>
          ))}
        </ul>
      }
    </div>

    </div>
  );
}

export default Messages;


