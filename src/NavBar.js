import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '2px solid black',
  paddingBottom: '10px',
  marginBottom: '12px',
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <ul>
        <li>
          <Link to="/">The Bot Collection</Link>
        </li>
        <li>
          <Link to="/bot-army">The Bot Army</Link> 
        </li>
        <li>
          <Link to="/bot-profiles">Bot Profiles</Link> 
        </li>
      </ul>
    </nav>
  );
}




