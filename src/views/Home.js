import React from 'react';
import MetaTags from 'react-meta-tags';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const Home = () => {  
  return (
    <>
    
      <MetaTags>
        <meta property="og:title" content="Home : Team Locus" />
        <title>Home : Team Locus</title>
      </MetaTags>

      <Hero className="illustration-section-01" />
      <FeaturesTiles id="projects" />
      <FeaturesSplit id="whatwedo" invertMobile topDivider imageFill className="illustration-section-02" />

    </>
  );
}

export default Home;