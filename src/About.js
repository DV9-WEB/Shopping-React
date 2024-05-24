import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context/ProductContext';


const About = () => {

  const myName = useContext(AppContext)

  const data = {
    name: "Verma Ecommerce",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
}

export default About
