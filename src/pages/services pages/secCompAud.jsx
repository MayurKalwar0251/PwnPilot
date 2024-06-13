import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const SecCompAud = () => {
  return (
    <div>
      <PageHeader
        name={"Security Compliance Audit"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Compliance Service", path: "#" },
          { name: "Security Compliance Audit", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default SecCompAud;
