import React from 'react';

import Card from '../components/Card';
import StatCard from '../components/Stat Card/Stat Card';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

import Schedule from '../components/Schedule/Schedule';
import Timer from '../components/Timer/Timer';

import 'tachyons';
import '../styles/index.scss';

export default () => {
  return (
    <Layout>
      <SEO />
      <section id="countdown" className="">
        <div className="container mx-auto tc mt-10">
          <div className="mv5">
            <h1 className="f-subheadline-ns f1 lh-solid font-primary font-roboto b tracked">
              MAKEUC 2020
            </h1>
          </div>
          <Timer />
        </div>
      </section>
      <section id="schedule" className="mt6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl title font-semibold">Schedule</h2>
          <div className="">
            <Schedule/>
          </div>
        </div>
      </section>
      <section id="data" className="mt6">
        <h2 className="text-3xl lg:text-5xl title font-semibold">Stats</h2>
        <div className="container mx-auto px-8 flex flex-wrap items-center justify-center">
          <StatCard className="ma3" name="Hackers" amount={1000} prefix={''} />
          <StatCard className="ma3" name="Universities" amount={300} prefix={''} />
          <StatCard className="ma3" name="Countries" amount={40} prefix={''} />
          <StatCard className="ma3" name="Majors" amount={120} prefix={''} />
          <StatCard className="ma3" name="Sponsors" amount={18} prefix={''} />
        </div>
      </section>
      <section id="social" className="mt6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl title font-semibold">Social Media</h2>
          <Card style={{ maxWidth: `700px` }} className="mx-auto bg-purply-white text-black text-center pa0">
            <div style={{ maxWidth: `700px` }} className="mx-auto">
              <a className="twitter-timeline" href="https://twitter.com/UC_IEEE?ref_src=twsrc%5Etfw">Tweets with #MakeUC20</a>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
