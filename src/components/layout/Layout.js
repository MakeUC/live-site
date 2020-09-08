/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FooterImage from '../FooterImage';
import ScrollTopButton from '../ScrollTopButton';

const Layout = ({ children }) => {
  return (
    <>
      <main className="pb-20">
        <Header />
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
