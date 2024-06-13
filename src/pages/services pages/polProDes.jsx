import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const PolProDesc = () => {
  return (
    <div>
      <PageHeader
        name={"Policy Procedure Designing"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Consulting", path: "#" },
          { name: "Policy Procedure Designing", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default PolProDesc;
