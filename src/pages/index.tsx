import { FC } from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

import { PageContainer } from '../components/PageStyles/StyledComponents';
import Schedule from '../components/Schedule/Schedule';
import Timer from '../components/Timer/Timer';

import 'tachyons';
import '../styles/index.scss';

import DiscordEmbed from '../components/Embeds/Discord';
import TwitterEmbed from '../components/Embeds/Twitter';
import HeaderTitleImg from '../svg/header_title_image.png';

const IndexPage: FC = () => (
  <PageContainer>
    <Layout>
      <SEO />
      <section id="countdown" className="pt-10">
        <div className="container mx-auto tc mt-32">
          <div
            className="mv5"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src={HeaderTitleImg}
              alt="MakeUC"
              style={{ textAlign: 'center', maxWidth: '700px', width: '70%' }}
            />
          </div>
          <Timer />
        </div>
      </section>
      <div className="container ml-auto mr-auto flex flex-wrap items-center justify-center mt4">
        <button>
          <a
            target="_blank"
            className="primary-button ma2"
            style={{ textDecoration: 'none', border: '1px solid', borderRadius: '4px' }}
            href="https://discord.gg/g2T8QAhaME"
          >
            DISCORD
          </a>
        </button>
        <button>
          <a
            target="_blank"
            className="primary-button ma2"
            style={{ textDecoration: 'none', border: '1px solid', borderRadius: '4px' }}
            href="https://makeuc-2022.devpost.com/"
          >
            DEVPOST
          </a>
        </button>
      </div>
      <section id="schedule" className="mt6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl title font-semibold">Schedule</h2>
          <div>
            <Schedule />
          </div>
        </div>
      </section>
      <section id="embeds" className="mt6 mb6">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl title font-semibold">Live Feed</h2>
          <div className="flex flex-col items-center md:flex-row justify-around">
            <div>
              <DiscordEmbed />
            </div>
            <div>
              <TwitterEmbed />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </PageContainer>
);

export default IndexPage;
