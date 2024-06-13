import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const PenetratTest = () => {
  return (
    <div>
      <PageHeader
        name={"Infrastructure Penetration Testing"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Assessment", path: "#" },
          { name: " Penetration Testing", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default PenetratTest;
