import React from "react";
import '../stylesheet/Player.css';


function Testimonial(props) {
  return (
    <div className="player-container">
      <img
        src={require(`../assets/${props.img}.jpg`)}
        alt="Messi"
      />
      <div className="text-container">
        <p className="name">{props.name} | {props.club}</p>
        <p className="age">{props.age} years</p>
        <p className="text">
          {props.text}
        </p>
      </div>
    </div>
  );
}


export default Testimonial