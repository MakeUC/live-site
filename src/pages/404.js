import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/Button';
import FooterImage from '../components/FooterImage';
import SEO from '../components/SEO';
import moon from '../svg/moon.png';

export default () => (
  <>
    <SEO />
    <main>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-404 font-bold leading-none">
              4
              <img className="moon-404" src={moon} alt="Moon" />
              4!
            </h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              It looks like the page you're searching for does not exist.
            </p>
            <p className="text-sm mt-6 font-light">
              Impossible. Perhaps the website is incomplete?
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="/">
                <Button size="lg">Home</Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <FooterImage />
    </main>
  </>
);
