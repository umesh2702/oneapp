import React, { useState } from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Price from "./price/Price";
import Recent from "./recent/Recent";
import Team from "./team/Team";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import AIChatButton from "../chat/AIChatButton";
import Chat from "../Chat";

const Home = ({login}) => {
  const [chatOpen, setChatOpen] = useState(false);

  const handleAIChatClick = () => {
    setChatOpen(!chatOpen);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };
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
      <AIChatButton onClick={handleAIChatClick} />
      {chatOpen && <Chat onClose={handleCloseChat} />}

    </>
  );
};

export default Home;
