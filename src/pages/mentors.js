import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Card from '../components/Card';
import MentorCard from '../components/Mentors/MentorCard';
import mentorData from '../../content/mentors.yaml';
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
        <div className="container mx-auto sm:px-4 lg:px-8 text-center flex flex-wrap items-center justify-center">
          {/* Good version */}
          {/* {mentorData.map((mentor, i) =>
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              className=""
              slack={mentor.slack}
              speciality={mentor.speciality}
            />
          )} */}
          <MentorCard name={"Michael Rybak"}
            className=""
            slack={"[Google] Michael Rybak"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Alfonso Portillo"}
            className=""
            slack={"[Google Cloud] alfporti"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Anthony Cruz"}
            className=""
            slack={"[Google Cloud] abcruz"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Eddie Lu"}
            className=""
            slack={"[Google Cloud] ejlu"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"James Loannidis"}
            className=""
            slack={"[Google Cloud] ioannidis"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Jasika Bawa"}
            className=""
            slack={"[Google Cloud] jasikab"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Johnny Wang"}
            className=""
            slack={"[Google Cloud] thejohnny"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Lizi Lopez"}
            className=""
            slack={"[Google Cloud] lizi"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Nitin Malik"}
            className=""
            slack={"[Google Cloud] maliknitin"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Ryan Matsumoto"}
            className=""
            slack={"[Google Cloud] ryanmats"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Samir Batta"}
            className=""
            slack={"[Google Cloud] samirbatta"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Shamara Valdez-Rubio"}
            className=""
            slack={"[Google Cloud] shamarav"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Shun Lin"}
            className=""
            slack={"[Google Cloud] shunlin"}
            speciality={"Google Cloud Platform"}
          />
          <MentorCard name={"Nathan Harris"}
            className=""
            slack={"[Northrop Grumman] pending"}
            speciality={"Python, Electron, JavaScript"}
          />
          <MentorCard name={"Clifton Wolfe"}
            className=""
            slack={"[Northrop Grumman] pending"}
            speciality={"Linux, Desktop Development"}
          />
          <MentorCard name={"David Washburn"}
            className=""
            slack={"[Northrop Grumman] pending"}
            speciality={"C/C++, Management, Red Team"}
          />
          <MentorCard name={"Aaron Sawyer"}
            className=""
            slack={"[Northrop Grumman] pending"}
            speciality={"Bash, Python, PowerShell"}
          />
          <MentorCard name={"Aaron Boyd"}
            className=""
            slack={"[Northrop Grumman] pending"}
            speciality={"Python, C/C++"}
          />
          <MentorCard name={"James Hardy"}
            className=""
            slack={"[Centauri] pending"}
            speciality={"Algorithms, Embedded Systems, Data Analysis"}
          />
          <MentorCard name={"Sean Collard"}
            className=""
            slack={"[Centauri] pending"}
            speciality={"Linux, Python, C, Verilog, Microcontrollers"}
          />
          <MentorCard name={"Kamari Wright"}
            className=""
            slack={"pending"}
            speciality={"Python, Back End, Front End, JavaScript, Java"}
          />
          <MentorCard name={"Ayon Roy"}
            className=""
            slack={"pending"}
            speciality={"Python, Machine Learning, Deep Learning"}
          />
          <MentorCard name={"Mihir Patel"}
            className=""
            slack={"[Mentor Web] Mihir Patel"}
            speciality={"React, Web Development, JavaScript, TypeScript"}
          />
          <MentorCard name={"Kuldeep Singh"}
            className=""
            slack={"pending"}
            speciality={"HTML, CSS, React.js, Node.js, GraphQL, Python"}
          />
          <MentorCard name={"Raman Sampath"}
            className=""
            slack={"pending"}
            speciality={"Enterprise Architecture, Data Architecture"}
          />
          <MentorCard name={"Jakob Jarvis"}
            className=""
            slack={"pending"}
            speciality={"SQL, Python"}
          />
        </div>
      </section>
    </Layout>
  );
};