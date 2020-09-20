import React from 'react';

import Card from '../components/Card';
import StatCard from '../components/Stat Card/Stat Card';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

import Schedule from '../components/MakeucSchedule';
import scheduleData from '../../content/schedule.yaml';
import 'tachyons';
import '../css/index.scss';

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto tc mt-10">
          <div className="mv5">
            <h1 className="f-subheadline-ns f1 lh-solid font-primary b">
              MAKEUC 2020
            </h1>
            <h4 className="f3-ns f4 lh-solid">
              Discovering the Beyond
            </h4>
            <h3 className="f2-ns f3 mt5 lh-solid">
              Starts In...
            </h3>
          </div>
          <h2 className="f-subheadline-ns f1 b lh-solid font-merriweather mt5-ns mv4 tc">
            22:00:00
          </h2>
          <div className="mh3 mh6-ns">
            <div class="h-3 relative rounded-full overflow-hidden">
              <div class="w-full h-full bg-gray-200 absolute"></div>
              <div class="h-full bg-progress-bar absolute" style={{ width: `10%` }} />
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" className="mt6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl title font-semibold">Schedule</h2>
          <div className="">
            <Schedule schedule={scheduleData} height="300px" />
          </div>
        </div>
      </section>
      <section id="data" className="mt6">
        <h2 className="text-3xl lg:text-5xl title font-semibold">Stats</h2>
        <div className="container mx-auto px-8 flex flex-wrap items-center justify-center">
          <StatCard className="ma3" name="Prizes" amount={125890} prefix={'$'} />
          <StatCard className="ma3" name="Universities" amount={108} prefix={''} />
          <StatCard className="ma3" name="Hackers" amount={139} prefix={''} />
          <StatCard className="ma3" name="Majors" amount={115} prefix={''} />
        </div>
      </section>
      <section id="social" className="mt6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl title font-semibold">Social Media</h2>
          <Card className="mx-4 bg-white text-black text-center">
            <h1 className="text-2xl font-semibold">
              #makeuc on Twitter
            </h1>
            <p>Twitter embed goes here</p>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
