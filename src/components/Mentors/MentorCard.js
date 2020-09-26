import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';

import './MentorCard.scss';

/**
 * The component to represent the Mentors
 * @param props = {
 *   name: The name of the mentor
 *   slack: The slack for the mentor
 *   speciality: The speciality of the mentor
 * }
 * @returns {JSX.Element}
 */
function MentorCard(props) {
  return (
    <div className={`p-4 w-full md:w-1/2 lg:w-1/3 ${props.className}`}>
      <div className="p-12 br2 MentorCard border border-solid mx-4 bg-white text-black text-center grow">
        <h1 className="f3 font-primary font-merriweather">{props.name}</h1>
        <h2 className="f4 font-secondary-dark font-opensans b mb4">@{props.slack} </h2>
        <p className="font-opensans">{props.speciality} </p>
      </div>
    </div>
  );
}

export default MentorCard;