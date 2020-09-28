import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';

import './StatCard.scss';

/**
 * The component to represent the Stats. Works as a card and has 'up-count' till desired stat
 * @param props = {
 *   name: The name of the stat (students, prizes and so on)
 *   amount: The amount for the stat (like 1000 students, 70 universities and so on)
 *   prefix: Any prefix to be used (like $)
 *   decimals: No of Decimals to be used
 * }
 * @returns {JSX.Element}
 * @constructor
 */
function StatCard(props) {
  let [scrolled, setScrolled] = useState(0);

  /**
   * Higher order component to return function to start the countdown
   * Need it cuz start() [The function to begin the animation] is only defined in the component!
   * Also sets the scrolled state to 1 to flag user already scrolled past
   * Done is basically scrolled (look the usage below)
   * @param start: The function to begin animation as defined by the component below
   * @param done: Whether the user scrolled past already
   * @returns {function(): void}
   */
  let startCountUp = (start, done) => {
    return () => {
      console.log(`The stat ${props.name} is scrolled? ${scrolled}`)
      if (done === 0) {
        console.log(`Hitting now ${props.name} : Scrolled = ${scrolled}. Done? ${done}`)
        start();
      }
      setScrolled(1);
    }
  }

  let printState = () => {
    console.log(`I'm a state printer: ${scrolled}`)
    setScrolled(scrolled + 1)
  }

  // useEffect(() => {
  //   console.log(`Effect started yahoo: ${scrolled}`)
  //    startCountUp = (start) => {
  //     return () => {
  //       console.log(`EFFECT :: The stat ${props.name} is scrolled? ${scrolled}`)
  //       if (scrolled === 0) {
  //         console.log(`Hitting now ${props.name} : ${scrolled}`)
  //         start();
  //       }
  //       setScrolled(1);
  //       console.log(`Attempting to update ${props.name} : ${scrolled}`)
  //     }
  //   }
  //   console.log(startCountUp)
  // })

  return (
    <div className={props.className}>
      <div className="p-12 br2 StatCard border border-solid mx-4 text-black text-center grow">
        <CountUp
          start={0}
          end={props.amount}
          duration={2}
          separator=" "
          decimals={props.decimal}
          prefix={props.prefix}>
          {({ countUpRef, start }) => (  // start() starts the counter. <Waypoint> fires onEnter everytime user scrolls past
            <div>
              <h1 className="f1 lh-title font-merriweather" ref={countUpRef} />
              <Waypoint onEnter={startCountUp(start, scrolled)}> </Waypoint>
              <button onClick={printState}>Scrolled state: {scrolled} [Clicking me also prints the scrolled state and increases it by one]</button>
            </div>
          )}
        </CountUp>

        <h2 className="f2 lh-title font-opensans font-gray b">{props.name} </h2>
      </div>
    </div>
  );
}

export default StatCard;