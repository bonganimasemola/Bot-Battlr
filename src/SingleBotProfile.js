import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchBots from './api';

function SingleBotProfile({ enlistedBots }) {
  const { botId } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
  
    async function fetchBotData() {
      try {
        const data = await fetchBots();
        const selectedBot = data.find((b) => b.id === parseInt(botId));
        if (selectedBot) {
          setBot(selectedBot);
        }
      } catch (error) {
        console.error('Error fetching bot data:', error);
      }
    }

    if (!bot && botId) {
      fetchBotData();
    }
  }, [bot, botId]);

  if (!bot) {
    return <div>Loading...</div>;
  }

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




