import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchBots } from './api'; 


function App() {
  
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetchBots()
      .then(data => {
        
        setBots(data.bots);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        
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

