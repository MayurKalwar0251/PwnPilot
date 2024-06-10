import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const ApiSec = () => {
  return (
    <div>
      <PageHeader
        name={"API Security Testing"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Assessment", path: "#" },
          { name: "API Security ", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default ApiSec;
