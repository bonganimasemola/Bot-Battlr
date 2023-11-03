import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchBots } from './api'; // Import the fetchData function from api.js

function App() {
  // Create state to store the fetched data
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchBots()
      .then(data => {
        // Update the state with the fetched data
        setBots(data.bots);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        {/* Render the fetched data here */}
        <ul>
          {bots.map(bot => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <h2>{bot.name}</h2>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

