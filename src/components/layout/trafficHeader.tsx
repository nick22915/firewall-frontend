"use client"; 
import React, { useState, useEffect } from "react";

/**
 * This component emulates the current network traffic in a header.
 * Values update every second.
 */
const App = () => {
 
  const [inTraffic, setInTraffic] = useState(0);
  const [outTraffic, setOutTraffic] = useState(0);

  useEffect(() => {
    // Function to generate random traffic values
    // This function generates a random number between 100 and 1099
    const generateRandomTraffic = () => Math.floor(Math.random() * 1000) + 100; 

    const intervalId = setInterval(() => {
      setInTraffic(generateRandomTraffic());
      setOutTraffic(generateRandomTraffic());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId); // Limpia el intervalo
    };
  }, []);

  return (
    <div className="container pl-11 pt-2 mb-2">
      <span className="ml-auto text-white font-semibold">
        RED Traffic: In{" "}
        <span className="font-bold text-white">{inTraffic}</span> bit/s Out{"    "}
        <span className="font-bold text-white">{outTraffic}</span> bit/s
      </span>
    </div>
  );
};

export default App;
