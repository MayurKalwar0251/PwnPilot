import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const DevSecOps = () => {
  return (
    <div>
      <PageHeader
        name={"DevSecOps"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "DevSecOps", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default DevSecOps;
