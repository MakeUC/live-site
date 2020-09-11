import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Card from '../components/Card';

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center title">
            Mentors
          </h2>
        </div>
        <div className="container mx-auto px-8 text-center">
          <Card className="mx-4 bg-white text-black text-center">
            <h1 className="text-2xl font-semibold">
              Google Sheets Embed
            </h1>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
