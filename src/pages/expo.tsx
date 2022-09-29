import { FC } from 'react';
import ExpoCard from '../components/Expo/ExpoCard';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const ExpoPage: FC = () => (
  <Layout>
    <SEO />
    <section id="countdown" className="">
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center title mb4">Sponsor Expo</h2>
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
        <ExpoCard
          name={'Google Cloud'}
          className=""
          link={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
          startTime={'12:00 PM'}
          endTime={'12:00 PM'}
          src="google-cloud.svg"
          imageHeight="48px"
        />
      </div>
    </section>
  </Layout>
);

export default ExpoPage;
