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
          {/*<Card className="mx-4 bg-white text-black text-center">*/}
          {/*  <h1 className="text-2xl font-semibold">*/}
          {/*    Google Sheets Embed*/}
          {/*  </h1>*/}
          {/*</Card>*/}
          <MentorCard name={"John Henry"}
                      className="ma2"
                      slack={"thisHenry"}
                      speciality={"Non sapiente autem aut fuga magnam quis sint. Et amet doloribus qui beatae earum quia. Debitis exercitationem nostrum sunt est nihil molestiae esse. Iusto voluptas vel quis doloremque quia qui. Consequatur neque non a atque occaecati qui."}
                      />
          <MentorCard name={"John Henry"}
                      className="ma2"
                      slack={"thisHenry"}
                      speciality={"Non sapiente autem aut fuga magnam quis sint. Et amet doloribus qui beatae earum quia. Debitis exercitationem nostrum sunt est nihil molestiae esse. Iusto voluptas vel quis doloremque quia qui. Consequatur neque non a atque occaecati qui."}
          />
          <MentorCard name={"John Henry"}
                      className="ma2"
                      slack={"thisHenry"}
                      speciality={"Non sapiente autem aut fuga magnam quis sint. Et amet doloribus qui beatae earum quia. Debitis exercitationem nostrum sunt est nihil molestiae esse. Iusto voluptas vel quis doloremque quia qui. Consequatur neque non a atque occaecati qui."}
          />
          <MentorCard name={"John Henry"}
                      className="ma2"
                      slack={"thisHenry"}
                      speciality={"Non sapiente autem aut fuga magnam quis sint. Et amet doloribus qui beatae earum quia. Debitis exercitationem nostrum sunt est nihil molestiae esse. Iusto voluptas vel quis doloremque quia qui. Consequatur neque non a atque occaecati qui."}
          />
        </div>
      </section>
    </Layout>
  );
};
