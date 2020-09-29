import React, { Component, useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';
import Accordion from '../components/Accordian/Accordian';

function createResource(name, details) {
  return { name, details };
}

const sponsorResources = [
  createResource('Major League Hacking',
  (
    <p className="text-left">
      <strong>MLH Software Lab</strong>
      <br></br>
      <br></br>
      <a target="_blank" href="https://hack.mlh.io/software/">hack.mlh.io/software</a>
      <br></br>
      <br></br>
      <strong>Learn (Powered By GitHub)</strong>
      <br></br>
      <br></br>
      <a target="_blank" href="https://hack.mlh.io/learn/">hack.mlh.io/learn</a>
      <br></br>
    </p>
  )),
  createResource('Google Cloud', (
    <p className="text-left">
      <strong>Google Cloud Credits</strong>
      <br></br>
      <br></br>
      $25 of Google Cloud credits will be emailed on or earlier than October 3rd.
      <br></br>
      <br></br>
      <strong>Intro to Firebase (Available at 3:30 PM EDT on Oct 3rd)</strong>
      <br></br>
      <br></br>
      Firebase is Google’s mobile application development platform that helps you build, improve, and grow your app.
      Andrea Wu, a Software Engineer at Google, will be sharing an exclusive talk with all MakeUC hackers on Slack.
      <br></br>
    </p>)),
  createResource('Wolfram Research',
    (
      <p className="text-left">
      <strong>Wolfram API</strong>
      <br></br>
      <br></br>
      <strong>API activation URL will be shared with MakeUC hackers on or earlier than October 3rd.</strong>
      <br></br>
      <br></br>
      The URL will take you to a sign-in page and prompt you to log in using your Wolfram ID. If you
      don't already have
      a Wolfram ID, you'll be prompted to create one using an active email address. Once logged in, you
      will see in the Downloads section which platforms of the software you have access to, with their accompanying
      activation keys.
      <br></br>
      <br></br>
      Please download the desktop version to your machine, boot up the application and use the associated
      activation key
      when prompted. This will grant you full access for 30 days from your activation date.
      <br></br>
      <br></br>
      When you access Wolfram|One in the cloud for the first time, you can create a new notebook or load a
      pre-made
      Things to Try live notebook, which is designed to guide you through neat things you can immediately
      compute.
      <br></br>
      <br></br>
      You can use Wolfram|One to create instant web apps and APIs, or to deploy to mobile. The Wolfram
      Language is also
      bundled on the Raspberry Pi, where you can connect directly to hardware, including Arduino etc.
      <br></br>
      <br></br>
      The fastest way to get an API up and running is detailed in the extensive Documentation Center
      available to you
      alongside your notebook: simply click the section in the documentation labeled Cloud and Deployment
      and select
      Instant APIs to access a handy how-to guide to help get you started.
      <br></br>
      <br></br>
      To view your account details-- including your available Cloud Credits and Cloud storage-- or
      re-download Wolfram|One,
      visit the following page:
      <br></br>
      <br></br>
      <a target="_blank"
          href="https://account.wolfram.com/products">account.wolfram.com/products</a>
      <br></br>
      <br></br>
      Wolfram|One is the world's first fully integrated cloud-desktop hybrid, integrated computation
      platform.
      The core of our technology stack is the Wolfram Language, which builds on three decades of
      development, and
      represents a new direction in programming-- that happens to be absolutely ideal for hackathons.
      <br></br>
      <br></br>
      <strong>Careers</strong>
      <br></br>
      <br></br>
      Wolfram Summer Programs has offerings for exceptional teens in high school as well as undergrads
      through post-docs. 
      <br></br>
      <br></br>
      These programs are for those interested in programming, computational thinking, machine
      learning, and innovative tech. Students create and complete a unique project to publish 
      during the program. 
      <br></br>
      <br></br>
      To sign up for 2021 registration announcements visit:
      <br></br>
      <br></br>
      <a target="_blank"
          href="https://education.wolfram.com/summer/">education.wolfram.com/summer</a>
      <br></br>
      <br></br>
      Interested in Wolfram mentorships or internships? Check out our opportunities here:
      <br></br>
      <br></br>
      <a target="_blank"
          href="https://www.wolfram.com/company/careers">wolfram.com/company/careers</a>
      <br></br>
      <br></br>
      Good luck, and happy hacking!
      <br></br>
    </p>
    )),
  createResource('Balsamiq',
    (
      <p className="text-left">
        Balsamiq Wireframes is a rapid low-fidelity UI wireframing tool that reproduces the experience of
        sketching on
        a notepad or whiteboard, but using a computer. Read more here on&nbsp;
        <a href="https://balsamiq.com/learn/articles/what-are-wireframes/" target="_blank">What are
          Wireframes?</a>
        <br></br>
        <br></br>
        It really forces you to focus on structure and content, avoiding lengthy discussions about colors
        and details
        that should come later in the process.
        <br></br>
        <br></br>
        Wireframes is FAST: you will generate more ideas, so you can throw out the bad ones and discover the
        best solutions.
        <br></br>
        <br></br>
        <strong>Product:</strong> <a target="_blank" href="https://balsamiq.cloud/">Balsamiq Cloud</a>
        <br></br>
        <strong>Promo Code will be shared with MakeUC hackers on or earlier than October 3rd.</strong>
        <br></br>
        <strong>Code Expiration:</strong> February 01, 2021
        <br></br>
        <br></br>
        <a target="_blank" href="https://support.balsamiq.com/sales/cloudpromo/">Instructions for Promo Code
          Redemption</a>
        <br></br>
      </p>
    )),
  createResource('EchoAR',
    (
      <p className="text-left">
        EchoAR is redefining how people create augmented reality (AR) and virtual reality (VR) experiences.
        <br></br>
        <br></br>
        We make it simple for developers and content creators to build, manage and deploy 3D applications
        and content with our flexible cloud infrastructure, intuitive content management system, fast
        content
        delivery network, and other best-in-class tools.
        With a killer team of AR industry experts and pioneers, we focus on providing the easiest way
        for XR-enthusiasts (just like us!) to scale up their 3D applications and immersive content.
        <br></br>
        <br></br>
        <strong>API access information will be shared with MakeUC hackers on or earlier than October 3rd.</strong>
        <br></br>
      </p>
    ))
];
const freeResources = [
  createResource('Starter Kits', (
    <p className="text-left">
      <strong><u>
        Build Your Own:
      </u></strong>
      <br></br>
      <br></br>
      <div className="flex mb-4">
        <div className="w-1/2">
          <ul className="ml-4" style={{ listStyleType: 'disc' }}>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-3d-renderer">3D
              Renderer</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-augmented-reality">Augmented
              Reality</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-bittorrent-client">BitTorrent
              Client</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-blockchain--cryptocurrency">Blockchain
              / Cryptocurrency</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-bot">Bot</a>
            </li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-command-line-tool">Command-Line
              Tool</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-database">Database</a>
            </li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-docker">Docker</a>
            </li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-emulator--virtual-machine">Emulator
              / Virtual Machine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-front-end-framework--library">Front-end
              Framework / Library</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-game">Game</a>
            </li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-git">Git</a>
            </li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-network-stack">Network
              Stack</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-neural-network">Neural
              Network</a></li>
          </ul>
        </div>
        <div className="w-1/2">
          <ul className="ml-4" style={{ listStyleType: 'disc' }}>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-operating-system">Operating
              System</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-physics-engine">Physics
              Engine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-programming-language">Programming
              Language</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-regex-engine">Regex
              Engine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-search-engine">Search
              Engine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-shell">Shell</a>
            </li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-template-engine">Template
              Engine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-text-editor">Text
              Editor</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-visual-recognition-system">Visual
              Recognition System</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-voxel-engine">Voxel
              Engine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-web-search-engine">Web
              Search Engine</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#build-your-own-web-server">Web
              Server</a></li>
            <li><a target="_blank"
                   href="https://github.com/danistefanovic/build-your-own-x#uncategorized">Uncategorized</a>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <strong><u>
        Boilerplate for Node.js applications
      </u></strong>
      <br></br>
      <br></br>
      Resource Link:&nbsp;
      <a target="_blank"
         href="https://github.com/sahat/hackathon-starter">github.com/sahat/hackathon-starter</a>
      <br></br>
      Live Demo:&nbsp;
      <a target="_blank"
         href="https://hackathon-starter.walcony.com/">hackathon-starter.walcony.com</a>
      <br></br>
      <br></br>
      If you have attended any hackathons in the past, then you know how much time it takes to get a
      project started:
      decide on what to build, pick a programming language, pick a web framework, pick a styling framework. A
      while later,
      you might have an initial project up on GitHub and only then can other team members start
      contributing.
      <br></br>
      <br></br>
      The primary focus is on simplicity and ease of use. The owner of this project also tried to make it
      as generic and reusable
      as possible to cover most use cases of hackathon web apps, without being too specific.
    </p>
  )),
  createResource('MOOC Platforms',
    (
      <p className="text-left">
        A massive open online course (MOOC) is an online course aimed at unlimited participation and open
        access via the web.
        In addition to traditional course materials, such as filmed lectures, readings, and problem sets,
        many MOOCs provide
        interactive courses with user forums or social media discussions to support community interactions
        among students,
        professors, and teaching assistants (TAs), as well as immediate feedback to quick quizzes and
        assignments.
        <br></br>
        <br></br>
        <strong>Note:&nbsp;</strong>MOOCs are great for learning. However, be careful to not submit code 
        from the tutorials/courses. MOOCs should be used solely for learning.
        <br></br>
        <ul className="ml-4" style={{ listStyleType: 'disc' }}>
          <li className="mt-4">
            <a target="_blank" href="https://www.coursera.org/">
              Coursera:
            </a>
            &nbsp;
            You can learn
            something new anytime, anywhere. Hundreds of free courses give you access to on-demand video
            lectures, homework
            exercises, and community discussion forums. Paid courses provide additional quizzes and projects
            as well as a
            shareable Course Certificate upon completion.
          </li>

          <li className="mt-4">
            <a target="_blank" href="https://www.edx.org/">
              edX:
            </a>
            &nbsp;
            Supporting learners at every stage, whether entering the job market, changing fields, seeking a
            promotion or exploring
            new interests, edX delivers courses for curious minds on topics ranging from data and computer
            science to leadership
            and communications. edX is where you go to learn.
          </li>

          <li className="mt-4">
            <a target="_blank" href="https://www.udemy.com/">
              Udemy:
            </a>
            &nbsp;
            Udemy is the leading global marketplace for teaching and learning, connecting millions of
            students to the skills they need to succeed.
            By connecting students all over the world to the best instructors, Udemy is helping individuals
            reach their goals and pursue their dreams.
          </li>

          <li className="mt-4">
            <a target="_blank" href="https://www.lynda.com/">
              Lynda/LinkedIn Learning:
            </a>
            &nbsp;
            Lynda.com is a leading online learning platform that helps anyone learn business, software,
            technology and creative skills to achieve
            personal and professional goals. Through individual, corporate, academic and government
            subscriptions, members have access to the
            Lynda.com video library of engaging, top-quality courses.
          </li>

          <li className="mt-4">
            <a target="_blank" href="https://aws.amazon.com/training/">
              Amazon AWS Training:
            </a>
            &nbsp;
            AWS Training
            and Certification helps you
            build and validate your cloud skills so you can get more out of the cloud. Our content is built
            by experts at AWS and updated
            regularly to keep pace with AWS updates, so you can be sure you’re learning the latest and
            keeping your cloud skills fresh.
          </li>

          <li className="mt-4">
            <a target="_blank" href="https://docs.microsoft.com/en-us/learn/">
              Microsoft Learn:
            </a>
            &nbsp;
            Microsoft Learn is a free, online training platform that provides interactive learning for
            Microsoft products and more.
            Our goal is to help you become proficient on our technologies and learn more skills with fun,
            guided, hands-on, interactive
            content that's specific to your role and goals.
          </li>
        </ul>
      </p>
    ))
];

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl title font-semibold">
            Sponsor Resources
          </h2>
        </div>
        <div className="container mx-auto mt-10">
          <Card className="bg-purply-white text-black">
          {
            sponsorResources.map(resource => {
              return <Accordion
                key={resource.name}
                title={resource.name}
                content={resource.details}
              />;
            })
          }
          </Card>
        </div>


        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl title font-semibold">
            Other Resources
          </h2>
        </div>
        <div className="container mx-auto mt-10">
          <Card className="bg-purply-white text-black">
            {
              freeResources.map(resource => {
                return <Accordion
                  key={resource.name}
                  title={resource.name}
                  content={resource.details}
                />;
              })
            }
          </Card>
        </div>
      </section>
    </Layout>
  );
};