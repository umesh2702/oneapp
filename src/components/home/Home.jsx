import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Price from "./price/Price";
import Recent from "./recent/Recent";
import Team from "./team/Team";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Home = ({login}) => {
  return (
    <>
      <Header login={login}/>
      <Hero />
      <Featured />
      <Recent />
      {/* <Awards />
      <Location />
      <Team />
      <Price /> */}
      <Footer />
    </>
  );
};

export default Home;
