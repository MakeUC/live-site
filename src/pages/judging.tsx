import { FC } from 'react';
import Layout from '../components/layout/Layout';
import { PageContainer } from '../components/PageStyles/StyledComponents';
import SEO from '../components/SEO';

const JudgingPage: FC = () => (
    <PageContainer>
      <Layout>
        <SEO />
        <section id="countdown" className="">
          <div className="container mx-auto mt-20" style={{ paddingTop: '40px' }}>
            <h2 className="text-3xl lg:text-5xl title font-semibold">Format</h2>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              This year, you have the option to be judged live via 10 minute calls with judges! 
              Calls will take place on Discord in the various judging room voice channels 
              (these will become visible after hacking ends). If you are part of a team, 
              you will present with your team members at the same time. We will provide you
              with a link to sign up for a judging session.
            <br></br>
            Please note: Live judging is not required. If you do not sign up for a slot, 
            your project will be judged solely from your Devpost submission.
            </p>
            <br></br>
            <br></br>
            <h2 className="text-3xl lg:text-5xl title font-semibold">Submissions</h2>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              ALL projects must be submitted on Devpost in order to be considered for prizes. Your
              Devpost submission must consist of a video (no more than 3 minutes) describing your 
              project, an ACCESSIBLE link to any code/ files used, and a brief writeup.
            </p>
            <br></br>
            <br></br>
            <h2 className="text-xl lg:text-5xl title font-semibold">Live Judging DO's and DONT's:</h2>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              DO sign up for a time slot after submitting your project on Devpost. <br></br>
              DO provide the link to your Devpost submission when you sign up for your time slot. <br></br>
              DO join the correct voice channel on time. 
            <br></br>
            <br></br>
              DO NOT sign up for a time slot if you have not submitted a project or do not want to 
              participate in live judging. <br></br>
              DO NOT sign up for more than one time slot (one project = one time slot). 
            </p>
            <br></br>
            <br></br>
          </div>
          <div className="container mx-auto mt-10">
          </div>
        </section>
      </Layout>
    </PageContainer>
  );

export default JudgingPage;
