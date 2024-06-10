import React from "react";
import Contact from "../components/contacts/Contact";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import PageHeader from "../components/pageHeader/PageHeader";
import Assesments from "../components/assesments/Assesments";
import Row4Elements from "../components/row4elements/Row4Elements";
import CollaboratingClosely from "../components/collaborating closely pink/CollaboratingClosely";

const ServicesPage = () => {
  return (
    <div>
      <Contact />
      <Navbar />
      <PageHeader
        name={"Services"}
        arrayOfLink={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Services",
            path: "#",
          },
        ]}
      />
      <Assesments />
      <Row4Elements />
      <EvolutionOfCyber />
      <CollaboratingClosely />
      <Footer />
    </div>
  );
};

export default ServicesPage;
