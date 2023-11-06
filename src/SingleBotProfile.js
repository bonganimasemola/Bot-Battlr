import React from 'react';

function SingleBotProfile({ bot }) {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>
        <strong>ID:</strong> {bot.id}
      </p>
      <p>
        <strong>Bot Class:</strong> {bot.bot_class}
      </p>
    </div>
  );
}

export default SingleBotProfile; 



