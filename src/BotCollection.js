import React from 'react';
import BotProfile from './BotProfile'; 

function BotCollection({ bots }) {
  return (
    <ul>
      {bots.map((bot) => (
        <BotProfile key={bot.id} bot={bot} />
      ))}
    </ul>
  );
}

export default BotCollection;
