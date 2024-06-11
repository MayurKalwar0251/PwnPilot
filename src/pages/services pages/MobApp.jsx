import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const MobApp = () => {
  return (
    <div>
      <PageHeader
        name={"Mobile Application Security Testing"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Assessment", path: "#" },
          { name: "Mobile Application", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default MobApp;