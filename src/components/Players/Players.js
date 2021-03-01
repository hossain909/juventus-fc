import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Players.css';
const Players = (props) => {
  const {name,salary,img} = props.player
  return (
    <div style={{marginRight:"10px",marginBottom:"15px",padding:"12px", textAlign:"center"}} className="player-info">
     
        <img src={img} alt=""/>
        <h3>{name}</h3>
        <h4>{salary}</h4>
        <button onClick={()=> props.handleAddPlayers(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
  
    </div>
  );
};

export default Players;