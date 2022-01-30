import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutError = ({ children }) => (
  <>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default LayoutError;  