import React, { useEffect, useState } from 'react';
import './Timer.scss'
import '../../styles/_variables.scss'
import '../../styles/_font.scss'

const startTime = new Date(`2020-10-03T16:00:00+00:00`);
const endTime = new Date(`2020-10-04T16:00:00+00:00`);

const msToTime = ms => {
  let seconds = Math.floor((ms / 1000) % 60),
    minutes = Math.floor((ms / (1000 * 60)) % 60),
    hours = Math.floor((ms / (1000 * 60 * 60)) % 24),
    days = Math.floor((ms / (1000 * 60 * 60 * 24)));

  hours = (hours < 10) ? `0` + hours : hours;
  minutes = (minutes < 10) ? `0` + minutes : minutes;
  seconds = (seconds < 10) ? `0` + seconds : seconds;

  if(days > 0) {
    days = (days < 10 && days > 0) ? `0` + days : days;
    return `${days}:${hours}:${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

const getETA = () => {
  const now = new Date();
  const etaToStart = startTime.getTime() - now.getTime();

  if(etaToStart < 0) {
    const etaToEnd = endTime.getTime() - now.getTime();
    return [ msToTime(etaToEnd), true ];
  }

  return [ msToTime(etaToStart), false ];
};

const Timer = () => {
  const [ [ eta, isStarted ], setEta ] = useState([]);

  useEffect(() => {
    const tick = setInterval(() => setEta(getETA()), 1000);
    return () => clearInterval(tick);
  }, []);

  return <>
    <h2 className="text-4xl md:text-6xl font-bold lh-solid font-merriweather index-countdown tc timer-letter-spacing">
      {eta}
    </h2>
    <h1 className="index-countdown text-2xl md:text-4xl font-opensans">{isStarted ? `Until Hacking STOPS` : `Until Hacking STARTS `} </h1>
  </>;
};

export default Timer;
