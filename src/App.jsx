import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Contact from "./components/contacts/Contact";
import Assesments from "./components/assesments/Assesments";
import CyberSecuritySImplify from "./components/cyber security simplified/CyberSecuritySImplify";
import Row4Elements from "./components/row4elements/Row4Elements";
import TrustedCyber from "./components/trusted cyber/TrustedCyber";
import SolutionOffer from "./components/solution offer/SolutionOffer";
import CyberDetail4 from "./components/cyber detail 4/CyberDetail4";
import CollaboratingClosely from "./components/collaborating closely pink/CollaboratingClosely";

function App() {
  return (
    <>
      <div>
        <Contact />
        <Navbar />
        <Hero />
        <Assesments />
        <CyberSecuritySImplify />
        <Row4Elements />
        <TrustedCyber />
        <SolutionOffer />
        <CyberDetail4 />
        <CollaboratingClosely />
      </div>
    </>
  );
}

export default App;
