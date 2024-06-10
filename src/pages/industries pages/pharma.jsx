import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const Pharmaceutical = () => {
  return (
    <div>
      <Contact />
      <Navbar />
      <PageHeader
        name={"Pharmaceutical"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Indsutries", path: "/industries" },
          { name: "Pharmaceutical", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Pharmaceutical;
