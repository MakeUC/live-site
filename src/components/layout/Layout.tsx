import { FC, ReactNode } from 'react';
import FooterImage from '../FooterImage';
import ScrollTopButton from '../ScrollTopButton';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = {
  page?: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ page = 'index', children }) => (
  <>
    <main>
      <Header page={page} />
      <ScrollTopButton />
      {children}
      <FooterImage />
    </main>
    <Footer />
  </>
);

export default Layout;
