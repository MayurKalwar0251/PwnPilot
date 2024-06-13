import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const RegCompAud = () => {
  return (
    <div>
      <PageHeader
        name={"Regulatory Compliance Audit"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Compliance Service", path: "#" },
          { name: "Regulatory Compliance Audit", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default RegCompAud;
