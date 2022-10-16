import { Link } from 'gatsby';
import { FC } from 'react';
import Button from '../components/Button';
import FooterImage from '../components/FooterImage';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';

const Error404Page: FC = () => (
  <>
    <SEO />
    <main>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-404 font-bold leading-none">404!</h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              It looks like the page you are searching for does not exist.
            </p>
            <p className="text-l mt-6 font-light">
              Impossible. Perhaps the website is incomplete?
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="/">
                <Button size="lg" className="text-md font-bold">
                  Home
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <FooterImage />
    </main>
    <Footer />
  </>
);
export default Error404Page;
