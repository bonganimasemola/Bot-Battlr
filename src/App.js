import React, { useEffect, useState } from 'react';
import './App.css';
import fetchBots from './api';
import BotCollection from './BotCollection';

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetchBots()
      .then((data) => {
        setBots(data.bots);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        <BotCollection bots={bots} />
      </header>
    </div>
  );
}

export default App;


