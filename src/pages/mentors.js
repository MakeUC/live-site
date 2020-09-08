import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            Mentors
          </h2>
        </div>
      </section>
    </Layout>
  );
};
