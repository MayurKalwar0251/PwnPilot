import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const RishAssAt = () => {
  return (
    <div>
      <PageHeader
        name={"Risk Assessment and Treatment"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Consulting", path: "#" },
          { name: "Risk Assessment and Treatment", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default RishAssAt;
