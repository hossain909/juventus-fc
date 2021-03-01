import React from 'react';
import './Details.css';
const Details = (props) => {
  const detail = props.detail
  console.log(props.detail)
  const totalSalary = detail.reduce((sum,detail)=> sum + parseInt(detail.salary.slice(1)),0)
  
  return (
    <div className="details">
      <h3>Team Member:{detail.length}</h3>
      <h4>Player Name:</h4>
      {
        detail.map(item=><li>{item.name}</li>)
      }
      <h2>Total Cost: ${totalSalary}</h2>
    </div>
  );
};

export default Details;