import React, { useEffect, useState } from 'react';
import './Timer.scss';
import '../../styles/_variables.scss';
import '../../styles/_font.scss';

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

const getETA = clearTick => {
  const now = new Date();
  const etaToStart = startTime.getTime() - now.getTime();

  if(etaToStart < 0) {
    const etaToEnd = endTime.getTime() - now.getTime();

    if(etaToEnd < 0) {
      clearTick();
      return [ 0, true ];
    }

    return [ msToTime(etaToEnd), true ];
  }

  return [ msToTime(etaToStart), false ];
};

const Timer = () => {
  const [ [ eta, isStarted ], setEta ] = useState([ `24:00:00`, true ]);

  useEffect(() => {
    const tick = setInterval(() => setEta(getETA(clearTick)), 1000);

    function clearTick() { clearInterval(tick); };

    return clearTick;
  }, []);

  return <>
    <h2 className="f-subheadline-ns f2 b lh-solid font-merriweather index-countdown tc timer-letter-spacing">
      {eta || `Hacking has ended!`}
    </h2>
    <h1 className="index-countdown f3 font-opensans">
      {eta ?
        (
          isStarted ?
            `Until Hacking STOPS` :
            `Until Hacking STARTS `
        ) : null
      }
    </h1>
  </>;
};

export default Timer;
