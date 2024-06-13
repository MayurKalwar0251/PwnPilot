import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const RedTeam = () => {
  return (
    <div>
      <PageHeader
        name={"Red Teaming"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Red Teaming", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default RedTeam;
