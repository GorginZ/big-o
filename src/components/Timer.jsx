import React, { useState, useEffect } from "react";

export const TimerContext = React.createContext(0);

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { maxItteration } = props;



  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          return seconds + 1;
        });
      }, 30);
      if (seconds == maxItteration - 1) {
      clearInterval(interval);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <TimerContext.Provider value={seconds}>
      {props.children}
      <button
        className={`button button-primary button-primary-${
          isActive ? "active" : "inactive"
        }`}
        onClick={toggle}
      >
        {isActive ? "Pause Itteration" : "Start Itterating"}
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </TimerContext.Provider>
  );
};

export default Timer;
