import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Card from '../components/Card';
import MentorCard from '../components/Mentors/MentorCard';

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center title mb4">
            Mentors
          </h2>
        </div>
        <div className="container mx-auto px-8 text-center flex flex-wrap items-center justify-center">
          <MentorCard name={"Nathan Harris"}
                      className="ma3"
                      slack={"[Northrop Grumman] Nathan"}
                      speciality={"Python, Electron, JavaScript"}
          />
          <MentorCard name={"Clifton Wolfe"}
                      className="ma3"
                      slack={"[Northrop Grumman] Clifton"}
                      speciality={"Linux, Desktop Development"}
          />
          <MentorCard name={"David Washburn"}
                      className="ma3"
                      slack={"[Northrop Grumman] David"}
                      speciality={"C/C++, Management, Cyber, Red Team"}
          />
          <MentorCard name={"Aaron Sawyer"}
                      className="ma3"
                      slack={"[Northrop Grumman] Aaron S"}
                      speciality={"Bash, Python, PowerShell"}
          />
          <MentorCard name={"Aaron Boyd"}
                      className="ma3"
                      slack={"[Northrop Grumman] Aaron B"}
                      speciality={"Python, C/C++"}
          />
          <MentorCard name={"James Hardy"}
                      className="ma3"
                      slack={"[Centauri] James"}
                      speciality={"Algorithms, Embedded Systems, Data Analysis"}
          />
          <MentorCard name={"Sean Collard"}
                      className="ma3"
                      slack={"[Centauri] Sean"}
                      speciality={"Linux, C/C++, Python, Verilog, Microcontrollers"}
          />
          <MentorCard name={"Kamari Wright"}
                      className="ma3"
                      slack={"Kamari Wright"}
                      speciality={"Python, Back End, Front End, JavaScript, Java"}
          />
          <MentorCard name={"Ayon Roy"}
                      className="ma3"
                      slack={"Ayon Roy"}
                      speciality={"Python, Machine Learning, Deep Learning"}
          />
        </div>
      </section>
    </Layout>
  );
};
