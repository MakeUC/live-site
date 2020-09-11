import React, { useState } from 'react';
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
  return (
    <div className={props.className}>
      <div className="p-12 br2 StatCard border border-solid mx-4 bg-white text-black text-center grow">
        <CountUp
          start={0}
          end={props.amount}
          duration={3}
          separator=" "
          decimals={props.decimal}
          prefix={props.prefix}>
          {({ countUpRef, start }) => (
            <div>
              <h1 className="f1 lh-title font-merriweather" ref={countUpRef} />
              <Waypoint onEnter={() => {
                start();
              }}>
              </Waypoint>
            </div>
          )}
        </CountUp>

        <h2 className="f2 lh-title font-opensans font-gray b">{props.name} </h2>
      </div>
    </div>
  );
}

export default StatCard;