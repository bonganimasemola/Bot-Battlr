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

  const releaseBot = (bot) => {
    const updatedBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<BotCollection enlistBot={enlistBot} />} />
          <Route path="/bot-army" element={<BotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />} />
          <Route path="/bot-profiles" element={<SingleBotProfile/>} />
          <Route path="/bot-profile/:botId" element={<SingleBotProfile enlistedBots={enlistedBots} />} />
        </Routes>
      </div>
    </Router>
  );
}
