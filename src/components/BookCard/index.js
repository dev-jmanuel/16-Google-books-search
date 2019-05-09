import React from "react";
import "./style.css";

function BookCard(props) {
  return (
    <div id="card">
      <div id="title">{props.title}</div>
      <div id="author">Written by {props.author}</div>
      <div>
        <img id="img-container" alt={props.title} src={require("../../images/" + props.image)} />
      </div>
      <div>
        <p id="summary-container">{props.summary}</p>
      </div>
    </div>
  );
}

export default BookCard;
