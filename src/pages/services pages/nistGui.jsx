import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const NisTGui = () => {
  return (
    <div>
      <PageHeader
        name={"NIST Guidelines"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Consulting", path: "#" },
          { name: "NIST Guidelines", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default NisTGui;
