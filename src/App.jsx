import "./App.css";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Company from "./pages/Company";
import WebAppSec from "./pages/services pages/WebAppSec";
import SastDast from "./pages/services pages/SastDast";
import ApiSec from "./pages/services pages/ApiSec";
import MobApp from "./pages/services pages/MobApp";
import PenetratTest from "./pages/services pages/PenetratTest";
import VulnerAsses from "./pages/services pages/VulnerAsses";
import WifiSec from "./pages/services pages/WifiSec";
import RegCompAud from "./pages/services pages/regCompAud";
import RegCompImp from "./pages/services pages/reguCompImp";
import SecCompImp from "./pages/services pages/secCompImp";
import SecCompAud from "./pages/services pages/secCompAud";
import RishAssAt from "./pages/services pages/riskAssAT";
import RedTeam from "./pages/services pages/redTeam";
import DevSecOps from "./pages/services pages/devSecOps";
import PolProDesc from "./pages/services pages/polProDes";
import NisTGui from "./pages/services pages/nistGui";
import BFSI from "./pages/industries pages/BFSI";
import Edu from "./pages/industries pages/edu";
import Gov from "./pages/industries pages/gov";
import Manu from "./pages/industries pages/Manu";
import Pharmaceutical from "./pages/industries pages/pharma";
import Tech from "./pages/industries pages/tech";
import { useEffect } from "react";
import NavbarContact from "./components/navbar/NavbarContact";
import About from "./pages/contact pages/about";
import Career from "./pages/contact pages/career";
import CertIn from "./pages/contact pages/cert-in";
import Key25 from "./pages/contact pages/key25";
import Leadership from "./pages/contact pages/leadership";
import ContactUs from "./pages/contact pages/contact";
import Aos from "aos";
import "aos/dist/aos.css";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop data-aos="fade-up" />
        <NavbarContact />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />

          <Route path="/web-app-sec" element={<WebAppSec />} />
          <Route path="/sast-dast" element={<SastDast />} />
          <Route path="/api-sec" element={<ApiSec />} />
          <Route path="/mob-app" element={<MobApp />} />
          <Route path="/penetrat-test" element={<PenetratTest />} />
          <Route path="/vulner-asses" element={<VulnerAsses />} />
          <Route path="/wifi-sec" element={<WifiSec />} />

          <Route path="/reg-comp-imp" element={<RegCompImp />} />
          <Route path="/sec-comp-imp" element={<SecCompImp />} />
          <Route path="/pol-proc-des" element={<PolProDesc />} />
          <Route path="/nist-gui" element={<NisTGui />} />
          <Route path="/risk-ass" element={<RishAssAt />} />
          <Route path="/reg-comp-aud" element={<RegCompAud />} />
          <Route path="/sec-comp-aud" element={<SecCompAud />} />
          <Route path="/red-team" element={<RedTeam />} />
          <Route path="/dev-sec-ops" element={<DevSecOps />} />

          <Route path="/bfsi" element={<BFSI />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/gov" element={<Gov />} />
          <Route path="/manu" element={<Manu />} />
          <Route path="/pharma" element={<Pharmaceutical />} />
          <Route path="/tech" element={<Tech />} />

          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/cert-in" element={<CertIn />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/key25" element={<Key25 />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
