import React from 'react';
import { deleteBot } from './api'; 


export default function BotArmy({ enlistedBots, releaseBot }) {
  const handleDelete = async (bot) => {
    try {
      await releaseBot(bot); 
      await deleteBot(bot.id); 
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };
console.log(enlistedBots);
  return (
    <div className="">
      <h1>The Bot Army</h1>
      <div className='container'>
      {enlistedBots.map((bot) => (
        <div key={bot.id} style={{border:"2px solid black"}}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>
            <strong>Name:</strong> {bot.name} <strong>Bot Class:</strong> {bot.bot_class}
          </p>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button onClick={() => handleDelete(bot)}>x</button> 
        </div>
      ))}
      </div>
    </div>
  );
}


