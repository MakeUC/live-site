import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
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
        <h1 className="text-center">COMING SOON!</h1>
        {/*<div className="container mx-auto sm:px-4 lg:px-8 text-center flex flex-wrap items-center justify-center">
          <MentorCard name={"Alfonso Portillo"}
            className=""
            slack={"[Google Cloud] alfporti"}
            speciality={"Google Cloud Platform"}
          />
        </div>*/}
      </section>
    </Layout>
  );
};