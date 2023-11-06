import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex', // Use flex display to create a row
  flexDirection: 'row', // Set the direction to row
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bot-army">BotArmy</Link>
        </li>
        <li>
          <Link to="/bot-profiles">BotProfiles</Link>
        </li>
        <li>
          <Link to="/bot-collection">BotCollection</Link>
        </li>
      </ul>
    </nav>
  );
}


