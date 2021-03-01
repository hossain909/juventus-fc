import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details/Details';
import Players from './components/Players/Players';
import logo from './fakeData/juventus-logo.svg';
import fakeData from './fakeData/playersData.js';

function App() {
  const [players,setPlayers] = useState([])
  const [details,setDetails] = useState([])

  useEffect(()=>{
   setPlayers(fakeData)
  },[])
  const handleAddPlayers = (player) =>{
   const newPlayer = [...details,player]
   setDetails(newPlayer)
  }
  return (
    <>
      <img className="logo" src={logo} alt=""></img>
      <div className="container">
        <div className="player-container">
          {players.map(item => <Players  handleAddPlayers={handleAddPlayers}  player={item}></Players>)}
        </div>
        <div className="player-details">
          <Details  detail={details}></Details>
        </div> 
      </div>
    </>
  );
}

export default App;
