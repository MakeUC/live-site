import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';

import './ExpoCard.scss';

/**
 * The component to represent the Mentors
 * @param props = {
 *   name: The name of the mentor
 *   slack: The slack for the mentor
 *   speciality: The speciality of the mentor
 * }
 * @returns {JSX.Element}
 */
function ExpoCard(props) {
  return (

    <div className={`p-4 w-full md:w-1/2 lg:w-1/3 ${props.className}`}>
      <a href={props.link}>
        <div className="p-12 br2 ExpoCard border border-solid mx-4 bg-white text-black text-center grow" style={{width:'400px'}}>
          <img src={props.src} style={{ height: props.imageHeight, alignSelf: "center"}} alt={props.alt} />
          <br></br>
          <h2 className="f3 font-primary">{props.name}</h2>
          <p>{props.startTime}-{props.endTime}</p>
        </div>
      </a>
    </div>
  );
}

export default ExpoCard;