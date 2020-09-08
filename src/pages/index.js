import React from "react";

import Card from "../components/Card";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

import Schedule from '../components/Schedule';
import scheduleData from '../../content/schedule.yaml';


export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto mt-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            22:00:00
          </h2>
          <div className="px-32">
            <div class="h-3 relative rounded-full overflow-hidden">
              <div class="w-full h-full bg-gray-200 absolute"></div>
              <div class="h-full bg-primary absolute" style={{ width: `10%` }} />
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" className="mt-12">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
          <div className="">
            <Schedule schedule={scheduleData} height="300px" />
          </div>
        </div>
      </section>
      <section id="data" className="mt-12">
        <div className="container mx-auto px-8 lg:flex">
          <div className="lg:w-1/2">
            <Card className="mx-4 bg-white text-black text-center">
              <h1 className="text-2xl font-semibold ">
                Stats
              </h1>
              <p className="">
                $99,999 total in prizes <br />
                $99,999 total in prizes <br />
                $99,999 total in prizes <br />
                $99,999 total in prizes <br />
              </p>
              <p>
                Type <code>/regbot</code> in the MakeUC Slack to get more statistics.
              </p>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <Card className="mx-4 bg-white text-black text-center">
              <h1 className="text-2xl font-semibold">
                #makeuc on Twitter
              </h1>
              <p>Twitter embed goes here</p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};
