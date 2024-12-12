//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

let message = "";
const customColor = {
  color: "red",
};

function chooseMessage() {
  const date = new Date(2024, 1, 1, 1);
  const time = date.getHours();

  if (time < 12) {
    message = "Good morning";
    customColor.color = "red";
  } else if (time < 18) {
    message = "Good Afternoon";
    customColor.color = "green";
  } else {
    message = "Good Evening";
    customColor.color = "blue";
  }
}

chooseMessage();

ReactDom.render(
  <div>
    <h1 className="heading" style={customColor}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);
