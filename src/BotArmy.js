import React from 'react';

export default function YourBotArmy({ enlistedBots, releaseBot }) {
  return (
    <div>
      <h1>Your Bot Army</h1>
      {enlistedBots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>
            <strong>Name:</strong> {bot.name} <strong>Bot Class:</strong> {bot.bot_class}
          </p>
          <button onClick={() => releaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}


