import React from "react";
import Contact from "../components/contacts/Contact";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Assesments from "../components/assesments/Assesments";
import CyberSecuritySImplify from "../components/cyber security simplified/CyberSecuritySImplify";
import CyberDetail4 from "../components/cyber detail 4/CyberDetail4";
import TrustedCyber from "../components/trusted cyber/TrustedCyber";
import SolutionOffer from "../components/solution offer/SolutionOffer";
import Row4Elements from "../components/row4elements/Row4Elements";
import CollaboratingClosely from "../components/collaborating closely pink/CollaboratingClosely";
import WhoWeServe from "../components/who we serve/WhoWeServe";
import LeadershipTeam from "../components/leadership team/LeadershipTeam";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";

const HomePage = () => {
  return (
    <div>
      <Contact />
      <Navbar />
      <Hero />
      <Assesments />
      <CyberSecuritySImplify />
      <CyberDetail4 />
      <TrustedCyber />
      <SolutionOffer />
      <Row4Elements />
      <CollaboratingClosely />
      <WhoWeServe />
      <LeadershipTeam />
      <EvolutionOfCyber />
      <Footer />
    </div>
  );
};

export default HomePage;
