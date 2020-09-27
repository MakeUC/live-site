import React from "react";
import Layout from "../components/layout/Layout";
import SEO from '../components/SEO';
import Card from '../components/Card';

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            Resources
          </h2>
        </div>
        <div className="container mx-auto mt-10">
          <div className="flex mb-4">
            <div className="w-2/5">
              <u><h2 className="text-2xl lg:text-4xl">Sponsored Resources:</h2></u>
              <br></br>
              <ul className="ml-4">
                <li className="text-xl lg:text-2xl mt-2">Google Cloud</li>
                <li className="text-xl lg:text-2xl mt-2">Wolfram Alpha</li>
                <li className="text-xl lg:text-2xl mt-2">Balsamiq</li>
                <li className="text-xl lg:text-2xl mt-2">echoAR</li>
                <li className="text-xl lg:text-2xl mt-2">Twilio</li>
                <li className="text-xl lg:text-2xl mt-2">MLH Software</li>
              </ul>
              <br></br>
              <u><h2 className="text-2xl lg:text-4xl">Free Resources:</h2></u>
              <br></br>
              <ul className="ml-4">
                <li className="text-xl lg:text-2xl mt-2">MOOC Platforms</li>
                <li className="text-xl lg:text-2xl mt-2">Coding Starter Kits</li>
                <li className="text-xl lg:text-2xl mt-2">APIs</li>
                <li className="text-xl lg:text-2xl mt-2">Software</li>
              </ul>
            </div>
            <div className="w-3/5">
              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    Google Cloud Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    Cloud Hero is a key opportunity for students to learn the fundamental tools and capabilities of Google Cloud, share an*/}
              {/*    engaging experience, and experience virtual training with a little competition thrown in for fun. The game is made up of*/}
              {/*    a virtual hands-on technical lab (<a target="_blank" href="https://slack-redir.net/link?url=https%3A%2F%2Fwww.qwiklabs.com%2F">Qwiklabs</a>) layered with activity-tracking and scoring. Earn Google Cloud badges to show*/}
              {/*    your skills and expertise!*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    Wolfram Alpha Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    Wolfram Research is pleased to sponsor your event by providing access to our latest technology, Wolfram|One!*/}
              {/*    For complimentary access to our development platform and the Wolfram API, just click here:*/}
              {/*    <br></br>*/}
              {/*    Link for complimentary access will be available when MakeUC starts.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    This URL will take you to a sign-in page and prompt you to log in using your Wolfram ID. If you don't already have*/}
              {/*    a Wolfram ID, you'll be prompted to create one using an active email address. Once logged in, you will see in the*/}
              {/*    Downloads section which platforms of the software you have access to, with their accompanying activation keys.*/}
              {/*    Please download the desktop version to your machine, boot up the application and use the associated activation key*/}
              {/*    when prompted. This will grant you full access for 30 days from your activation date.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    When you access Wolfram|One in the cloud for the first time, you can create a new notebook or load a pre-made*/}
              {/*    Things to Try live notebook, which is designed to guide you through neat things you can immediately compute*/}
              {/*    in the Wolfram Language.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    You can use Wolfram|One to create instant web apps and APIs, or to deploy to mobile. The Wolfram Language is also*/}
              {/*    bundled on the Raspberry Pi, where you can connect directly to hardware, including Arduino etc.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    The fastest way to get an API up and running is detailed in the extensive Documentation Center available to you*/}
              {/*    alongside your notebook: simply click the section in the documentation labeled Cloud and Deployment and select*/}
              {/*    Instant APIs to access a handy how-to guide to help get you started.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    To view your account details-- including your available Cloud Credits and Cloud storage-- or re-download Wolfram|One,*/}
              {/*    visit the following page:*/}
              {/*    <br></br>*/}
              {/*    <a target="_blank" href="https://account.wolfram.com/products">https://account.wolfram.com/products</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Wolfram|One is the world's first fully integrated cloud-desktop hybrid, integrated computation platform.*/}
              {/*    The core of our technology stack is the Wolfram Language, which builds on three decades of development, and*/}
              {/*    represents a new direction in programming-- that happens to be absolutely ideal for hackathons.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Wolfram Summer Programs has offerings for exceptional teens in high school as well as undergrads through*/}
              {/*    post-docs. These programs are for those interested in programming, computational thinking, machine learning,*/}
              {/*    and innovative tech. Students create and complete a unique project to publish during the program. To sign up*/}
              {/*    for 2021 registration announcements visit:*/}
              {/*    <br></br>*/}
              {/*    <a target="_blank" href="http://education.wolfram.com/summer/">http://education.wolfram.com/summer/</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Interested in Wolfram mentorships or internships? Check out our opportunities here:*/}
              {/*    <br></br>*/}
              {/*    <a target="_blank" href="https://www.wolfram.com/company/careers">https://www.wolfram.com/company/careers</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Good luck, and happy hacking!*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    Balsamiq Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    Balsamiq Wireframes is a rapid low-fidelity UI wireframing tool that reproduces the experience of sketching on*/}
              {/*    a notepad or whiteboard, but using a computer. Read more here on&nbsp;*/}
              {/*    <a href="https://balsamiq.com/learn/articles/what-are-wireframes/" target="_blank">What are Wireframes?</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    It really forces you to focus on structure and content, avoiding lengthy discussions about colors and details*/}
              {/*    that should come later in the process.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Wireframes is FAST: you will generate more ideas, so you can throw out the bad ones and discover the best solutions.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    <strong>Promo Code:</strong> will be available when MakeUC starts*/}
              {/*    <br></br>*/}
              {/*    <strong>Product:</strong> <a target="_blank" href="https://balsamiq.cloud/">Balsamiq Cloud</a>*/}
              {/*    <br></br>*/}
              {/*    <strong>Code Expiration:</strong> February 01, 2021*/}
              {/*    <br></br>*/}
              {/*    <a target="_blank" href="https://support.balsamiq.com/sales/cloudpromo/">Instructions for promo code redemption</a>*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    echoAR Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    echoAR is redefining how people create augmented reality (AR) and virtual reality (VR) experiences.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    We make it simple for developers and content creators to build, manage and deploy 3D applications*/}
              {/*    and content with our flexible cloud infrastructure, intuitive content management system, fast content*/}
              {/*    delivery network, and other best-in-class tools.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    With a killer team of AR industry experts and pioneers, we focus on providing the easiest way*/}
              {/*    for XR-enthusiasts (just like us!) to scale up their 3D applications and immersive content.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    <strong>Use the following link to register for their APIs and Cloud:</strong>*/}
              {/*    <br></br>*/}
              {/*    Link will be available when MakeUC starts.*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    Twilio Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    Will add later.*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    MLH Software Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    MLH has partnered with some amazing technology companies to get you FREE access to their APIs this weekend.*/}
              {/*    Please visit MLH's software resources page to redeem these resources:*/}
              {/*    <br></br>*/}
              {/*    <a target="_blank" href="https://hack.mlh.io/software/">https://hack.mlh.io/software/</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Some of the resources provided include:*/}
              {/*    <ul className="ml-4" style={{listStyleType : "disc"}}>*/}
              {/*      <li className="mt-4">*/}
              {/*        <u>*/}
              {/*          <a target="_blank" href="http://hackp.ac/gcp">*/}
              {/*            Google Cloud:*/}
              {/*          </a>*/}
              {/*        </u>*/}
              {/*        &nbsp;*/}
              {/*        Up to $100 in Google Cloud credits.*/}
              {/*        <br></br>*/}
              {/*        Bring your project to the next level using Google Cloud Platform's infinitely scalable virtual machines,*/}
              {/*        world class databases and analytics, and powerful machine learning technologies.*/}
              {/*      </li>*/}
              {/*      <li className="mt-4">*/}
              {/*        <u>*/}
              {/*          <a target="_blank" href="http://hackp.ac/githubpack">*/}
              {/*            GitHub Student Developer Pack:*/}
              {/*          </a>*/}
              {/*        </u>*/}
              {/*        &nbsp;*/}
              {/*        The GitHub Student Developer Pack gives hackers free access to the best developer tools, all in one place.*/}
              {/*        <br></br>*/}
              {/*        Millions of developers use GitHub to build personal projects, support their businesses, and*/}
              {/*        work together on open source technologies.*/}
              {/*      </li>*/}
              {/*      <li className="mt-4">*/}
              {/*        <u>*/}
              {/*          <a target="_blank" href="http://hackp.ac/domain">*/}
              {/*            Domain.com:*/}
              {/*          </a>*/}
              {/*        </u>*/}
              {/*        &nbsp;*/}
              {/*        1 Free Domain (.tech, .space, or .online) & 1 Year of Domain Privacy.*/}
              {/*        <br></br>*/}
              {/*        Domain.com provides all the domain services you need from registration to hosting to SSL certificates & beyond.*/}
              {/*      </li>*/}
              {/*      <li className="mt-4">*/}
              {/*        <u>*/}
              {/*          <a target="_blank" href="https://hackp.ac/datastax-astra">*/}
              {/*            Datastax:*/}
              {/*          </a>*/}
              {/*        </u>*/}
              {/*        &nbsp;*/}
              {/*        Cassandra made easy in the cloud.*/}
              {/*        <br></br>*/}
              {/*        Millions of developers use GitHub to build personal projects, support their businesses, and*/}
              {/*        work together on open source technologies.*/}
              {/*      </li>*/}
              {/*      <li className="mt-4">*/}
              {/*        <u>*/}
              {/*          <a target="_blank" href="http://hackp.ac/radar">*/}
              {/*            Radar:*/}
              {/*          </a>*/}
              {/*        </u>*/}
              {/*        &nbsp;*/}
              {/*        Location context made simple.*/}
              {/*        <br></br>*/}
              {/*        Radar is geofencing reinvented. Their developer-friendly, privacy-first SDKs and APIs will help*/}
              {/*        you build amazing location-aware hacks!*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    MOOC/Learning Platforms*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    A massive open online course (MOOC) is an online course aimed at unlimited participation and open access via the web.*/}
              {/*    In addition to traditional course materials, such as filmed lectures, readings, and problem sets, many MOOCs provide*/}
              {/*    interactive courses with user forums or social media discussions to support community interactions among students,*/}
              {/*    professors, and teaching assistants (TAs), as well as immediate feedback to quick quizzes and assignments.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    <strong>Note:&nbsp;</strong>Most of these platforms have free courses. Also, most universities have partnerships for the*/}
              {/*    premium version of some or all of these platforms. These are very helpful and you should check with your University*/}
              {/*    for access to them.*/}

              {/*    <br></br>*/}
              {/*    <br></br>*/}

              {/*    <ul className="ml-4" style={{listStyleType : "disc"}}>*/}
              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://www.coursera.org/">*/}
              {/*          Coursera:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        Every course on Coursera is taught by top instructors from world-class universities and companies, so you can learn*/}
              {/*        something new anytime, anywhere. Hundreds of free courses give you access to on-demand video lectures, homework*/}
              {/*        exercises, and community discussion forums. Paid courses provide additional quizzes and projects as well as a*/}
              {/*        shareable Course Certificate upon completion.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://www.edx.org/">*/}
              {/*          edX:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        edX is the trusted platform for education and learning. Founded by Harvard and MIT, edX is home to more than*/}
              {/*        20 million learners, the majority of top-ranked universities in the world and industry-leading companies.*/}
              {/*        As a global nonprofit, edX is transforming traditional education, removing the barriers of cost, location and access.*/}
              {/*        Supporting learners at every stage, whether entering the job market, changing fields, seeking a promotion or exploring*/}
              {/*        new interests, edX delivers courses for curious minds on topics ranging from data and computer science to leadership*/}
              {/*        and communications. edX is where you go to learn.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://www.udemy.com/">*/}
              {/*          Udemy:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        Udemy is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.*/}
              {/*        By connecting students all over the world to the best instructors, Udemy is helping individuals reach their goals and pursue their dreams.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://www.lynda.com/">*/}
              {/*          Lynda/LinkedIn Learning:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        Lynda.com is a leading online learning platform that helps anyone learn business, software, technology and creative skills to achieve*/}
              {/*        personal and professional goals. Through individual, corporate, academic and government subscriptions, members have access to the*/}
              {/*        Lynda.com video library of engaging, top-quality courses taught by recognized industry experts.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://www.qwiklabs.com/">*/}
              {/*          QwikLabs (Cloud Training):*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        We give you temporary credentials to Google Cloud Platform and Amazon Web Services, so you can learn the cloud using the real*/}
              {/*        thing – no simulations. From 30-minute individual labs to multi-day courses, from introductory level to expert,*/}
              {/*        instructor-led or self-paced, with topics like machine learning, security, infrastructure, app dev, and more, we've got you covered.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://aws.amazon.com/training/">*/}
              {/*          Amazon AWS Training:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        Organizations need individuals with cloud skills to help transform their business. AWS Training and Certification helps you*/}
              {/*        build and validate your cloud skills so you can get more out of the cloud. Our content is built by experts at AWS and updated*/}
              {/*        regularly to keep pace with AWS updates, so you can be sure you’re learning the latest and keeping your cloud skills fresh.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://docs.microsoft.com/en-us/learn/">*/}
              {/*          Microsoft Learn:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        Microsoft Learn is a free, online training platform that provides interactive learning for Microsoft products and more.*/}
              {/*        Our goal is to help you become proficient on our technologies and learn more skills with fun, guided, hands-on, interactive*/}
              {/*        content that's specific to your role and goals.*/}
              {/*      </li>*/}

              {/*      <li className="mt-4">*/}
              {/*        <a target="_blank" href="https://aischool.microsoft.com/en-us/home">*/}
              {/*          Microsoft AI School:*/}
              {/*        </a>*/}
              {/*        &nbsp;*/}
              {/*        Learn more about Conversational AI, AI Services, Machine Learning, Autonomous Systems, Responsible AI and more.*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    Coding Starter Kits*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    <strong><u>*/}
              {/*      Build Your Own:*/}
              {/*    </u></strong>*/}
              {/*    <br></br>*/}
              {/*    <div className="flex mb-4">*/}
              {/*      <div className="w-1/2">*/}
              {/*        <ul className="ml-4" style={{listStyleType : "disc"}}>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-3d-renderer">3D Renderer</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-augmented-reality">Augmented Reality</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-bittorrent-client">BitTorrent Client</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-blockchain--cryptocurrency">Blockchain / Cryptocurrency</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-bot">Bot</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-command-line-tool">Command-Line Tool</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-database">Database</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-docker">Docker</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-emulator--virtual-machine">Emulator / Virtual Machine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-front-end-framework--library">Front-end Framework / Library</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-game">Game</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-git">Git</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-network-stack">Network Stack</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-neural-network">Neural Network</a></li>*/}
              {/*        </ul>*/}
              {/*      </div>*/}
              {/*      <div className="w-1/2">*/}
              {/*        <ul className="ml-4" style={{listStyleType : "disc"}}>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-operating-system">Operating System</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-physics-engine">Physics Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-programming-language">Programming Language</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-regex-engine">Regex Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-search-engine">Search Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-shell">Shell</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-template-engine">Template Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-text-editor">Text Editor</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-visual-recognition-system">Visual Recognition System</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-voxel-engine">Voxel Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-web-search-engine">Web Search Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-web-server">Web Server</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#uncategorized">Uncategorized</a></li>*/}
              {/*        </ul>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <br></br>*/}
              {/*    <strong><u>*/}
              {/*      Boilerplate for Node.js web applications*/}
              {/*    </u></strong>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Resource Link:&nbsp;*/}
              {/*    <a target="_blank" href="https://github.com/sahat/hackathon-starter">https://github.com/sahat/hackathon-starter</a>*/}
              {/*    <br></br>*/}
              {/*    Live Demo:&nbsp;*/}
              {/*    <a target="_blank" href="https://hackathon-starter.walcony.com/">https://hackathon-starter.walcony.com/</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    If you have attended any hackathons in the past, then you know how much time it takes to get a project started:*/}
              {/*    decide on what to build, pick a programming language, pick a web framework, pick a CSS framework. A while later,*/}
              {/*    you might have an initial project up on GitHub and only then can other team members start contributing. Or how about*/}
              {/*    doing something as simple as Sign in with Facebook authentication? You can spend hours on it if you are not familiar*/}
              {/*    with how OAuth 2.0 works.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    The primary focus is on simplicity and ease of use. The owner of this project also tried to make it as generic and reusable*/}
              {/*    as possible to cover most use cases of hackathon web apps, without being too specific. In the worst case, you can use this*/}
              {/*    as a learning guide for your projects, if for example you are only interested in Sign in with Google authentication and nothing else.*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    API Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*    <strong><u>*/}
              {/*      Build Your Own:*/}
              {/*    </u></strong>*/}
              {/*    <br></br>*/}
              {/*    <div className="flex mb-4">*/}
              {/*      <div className="w-1/2">*/}
              {/*        <ul className="ml-4" style={{listStyleType : "disc"}}>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-3d-renderer">3D Renderer</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-augmented-reality">Augmented Reality</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-bittorrent-client">BitTorrent Client</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-blockchain--cryptocurrency">Blockchain / Cryptocurrency</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-bot">Bot</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-command-line-tool">Command-Line Tool</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-database">Database</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-docker">Docker</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-emulator--virtual-machine">Emulator / Virtual Machine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-front-end-framework--library">Front-end Framework / Library</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-game">Game</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-git">Git</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-network-stack">Network Stack</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-neural-network">Neural Network</a></li>*/}
              {/*        </ul>*/}
              {/*      </div>*/}
              {/*      <div className="w-1/2">*/}
              {/*        <ul className="ml-4" style={{listStyleType : "disc"}}>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-operating-system">Operating System</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-physics-engine">Physics Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-programming-language">Programming Language</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-regex-engine">Regex Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-search-engine">Search Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-shell">Shell</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-template-engine">Template Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-text-editor">Text Editor</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-visual-recognition-system">Visual Recognition System</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-voxel-engine">Voxel Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-web-search-engine">Web Search Engine</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#build-your-own-web-server">Web Server</a></li>*/}
              {/*          <li><a target="_blank" href="https://github.com/danistefanovic/build-your-own-x#uncategorized">Uncategorized</a></li>*/}
              {/*        </ul>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <br></br>*/}
              {/*    <strong><u>*/}
              {/*      Boilerplate for Node.js web applications*/}
              {/*    </u></strong>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    Resource Link:&nbsp;*/}
              {/*    <a target="_blank" href="https://github.com/sahat/hackathon-starter">https://github.com/sahat/hackathon-starter</a>*/}
              {/*    <br></br>*/}
              {/*    Live Demo:&nbsp;*/}
              {/*    <a target="_blank" href="https://hackathon-starter.walcony.com/">https://hackathon-starter.walcony.com/</a>*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    If you have attended any hackathons in the past, then you know how much time it takes to get a project started:*/}
              {/*    decide on what to build, pick a programming language, pick a web framework, pick a CSS framework. A while later,*/}
              {/*    you might have an initial project up on GitHub and only then can other team members start contributing. Or how about*/}
              {/*    doing something as simple as Sign in with Facebook authentication? You can spend hours on it if you are not familiar*/}
              {/*    with how OAuth 2.0 works.*/}
              {/*    <br></br>*/}
              {/*    <br></br>*/}
              {/*    The primary focus is on simplicity and ease of use. The owner of this project also tried to make it as generic and reusable*/}
              {/*    as possible to cover most use cases of hackathon web apps, without being too specific. In the worst case, you can use this*/}
              {/*    as a learning guide for your projects, if for example you are only interested in Sign in with Google authentication and nothing else.*/}
              {/*  </p>*/}
              {/*</Card>*/}

              {/*<Card className="mx-4 bg-white text-black text-center">*/}
              {/*  <h1 className="text-2xl font-semibold">*/}
              {/*    Software Resources*/}
              {/*  </h1>*/}
              {/*  <p className="text-left">*/}
              {/*   Will add later.*/}
              {/*  </p>*/}
              {/*</Card>*/}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
