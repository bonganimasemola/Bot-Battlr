import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import SingleBotProfile from './SingleBotProfile';
import NavBar from './NavBar'; 

export default function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    if (!enlistedBots.find((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<BotCollection enlistBot={enlistBot} />} />
          <Route path="/bot-army" element={<BotArmy enlistedBots={enlistedBots} />} />
          <Route path="/bot-profiles" element={<div>Going to render Single</div>} />
          <Route path="/bot-profile/:botId" element={<SingleBotProfile enlistedBots={enlistedBots} />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
    </Router>
  );
}


