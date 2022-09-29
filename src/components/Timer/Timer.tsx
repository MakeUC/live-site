import { FC, useEffect, useState } from 'react';
import '../../styles/_font.scss';
import '../../styles/_variables.scss';
import './Timer.scss';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasStarted?: boolean;
}

const startTime = new Date(`2022-10-22T11:15:00-04:00`);
const endTime = new Date(`2021-10-23T11:15:00-04:00`);

const msToTime = (ms: number): TimeLeft => {
  const seconds = Math.floor((ms / 1000) % 60),
    minutes = Math.floor((ms / (1000 * 60)) % 60),
    hours = Math.floor((ms / (1000 * 60 * 60)) % 24),
    days = Math.floor(ms / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const getTimeLeft = (): TimeLeft | undefined => {
  const now = new Date();
  const etaToStart = startTime.getTime() - now.getTime();

  if (etaToStart < 0) {
    // Has started, so check against end
    const etaToEnd = endTime.getTime() - now.getTime();

    if (etaToEnd < 0) return undefined; // Marks the end

    return { ...msToTime(etaToEnd), hasStarted: true };
  }

  return msToTime(etaToStart);
};

interface TimerNumberProps {
  time: number;
  name: string;
}

const TimerNumber: FC<TimerNumberProps> = ({ time, name }) => (
  <div className="flex-auto">
    <div className="flex-col content-center">
      <div style={{ fontSize: '4rem' }}>{time}</div>
      <div style={{ fontSize: '1rem' }}>{name}</div>
    </div>
  </div>
);

const Timer: FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | undefined>();

  useEffect(() => {
    setTimeLeft(getTimeLeft()); // Run right away once

    const tick = setInterval(() => setTimeLeft(getTimeLeft()), 1000);

    return () => clearInterval(tick);
  }, []);

  if (!timeLeft)
    // Hacking has ended (indicated by undefined)
    return (
      <h2
        className="f-subheadline-ns f2 b lh-solid font-merriweather index-countdown tc"
        style={{ fontSize: '45px' }}
      >
        Hacking has ended!
      </h2>
    );

  return (
    <div className="font-opensans">
      <div className="flex">
        <TimerNumber time={timeLeft.days} name="DAYS" />
        <TimerNumber time={timeLeft.hours} name="HOURS" />
        <TimerNumber time={timeLeft.minutes} name="MINUTES" />
        <TimerNumber time={timeLeft.seconds} name="SECONDS" />
      </div>
      <h1 className="index-countdown f3 font-opensans" style={{ fontSize: '45px' }}>
        {timeLeft.hasStarted ? `Until Hacking STOPS` : `Until Hacking STARTS `}
      </h1>
    </div>
  );
};

export default Timer;
