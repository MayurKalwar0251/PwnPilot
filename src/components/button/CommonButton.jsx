import React, { useState, useEffect } from "react";
import "./commonbtn.css";

const CommonButton = () => {
  const [ripple, setRipple] = useState(null);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    button.appendChild(circle);
    setRipple(circle);
  };

  useEffect(() => {
    if (ripple) {
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  }, [ripple]);

  return <button onClick={createRipple}>Click me</button>;
};

export default CommonButton;
