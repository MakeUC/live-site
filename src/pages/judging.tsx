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
            This year's projects will be judged live via 10 minute calls with judges! 
            Calls will take place on Discord in the various judging room voice channels 
            (these will become visible after hacking ends). If you are part of a team, 
            you will present with your team members at the same time.
            <br></br>
            Please note: live judging is not required. If you do not sign up for a slot, 
            your project will be judged solely from your Devpost submission.
            </p>
            <br></br>
            <br></br>
            <h2 className="text-xl lg:text-5xl title font-semibold">You MUST:</h2>
            <p className="text-xl lg:text-3xl mt-6 font-light">
            Sign up for a time slot after submitting your project on Devpost. <br></br>
            Provide the link to your Devpost submission when you sign up for your time slot. <br></br>
            Join the correct voice channel on time. 
            <br></br>
            <br></br>
            </p>
            <h2 className="text-xl lg:text-5xl title font-semibold">Do NOT:</h2>
            <p className="text-xl lg:text-3xl mt-6 font-light">
            Sign up for a time slot if you have not submitted a project. <br></br>
            Sign up for more than one time slot (one project = one time slot). <br></br>
            <br></br>
            </p>
          </div>
          <div className="container mx-auto mt-10">
          </div>
        </section>
      </Layout>
    </PageContainer>
  );

export default JudgingPage;
