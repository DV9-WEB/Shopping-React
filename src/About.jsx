import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'


const About = () => {

  const data = {
    name: "Sheetal Ecommerce",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
}

export default About
