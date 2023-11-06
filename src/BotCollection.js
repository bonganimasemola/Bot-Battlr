import React, { useState, useEffect } from 'react';
import { fetchBots } from './api'; 


export default function BotCollection({ enlistBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      try {
        const data = await fetchBots();
        setBots(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 

  const handleEnlistClick = (bot) => {
    enlistBot(bot);
  };

  return (
    <div>
      <h1 className="TheBotCollection">The Bot Collection</h1>
      {bots.map((bot) => (
        <div key={bot.id}>
        <img src={bot.avatar_url} alt={bot.name} />
        <p>
          <strong>Name:</strong> {bot.name} <strong>Bot Class:</strong> {bot.bot_class}
          </p>
          <button onClick={() => handleEnlistClick(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
}



