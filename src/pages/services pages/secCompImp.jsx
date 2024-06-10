import React from "react";
import Contact from "../../components/contacts/Contact";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

const SecCompImp = () => {
  return (
    <div>
      <PageHeader
        name={"Security Compliance Implementation"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Security Consulting", path: "#" },
          { name: "Security Compliance Implementation", path: "#" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default SecCompImp;
