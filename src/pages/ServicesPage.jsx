import React from "react";
import Footer from "../components/footer/Footer";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import PageHeader from "../components/pageHeader/PageHeader";
import Assesments from "../components/assesments/Assesments";
import Row4Elements from "../components/row4elements/Row4Elements";
import CollaboratingClosely from "../components/collaborating closely pink/CollaboratingClosely";
import NavbarContact from "../components/navbar/NavbarContact";

const ServicesPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default ServicesPage;
