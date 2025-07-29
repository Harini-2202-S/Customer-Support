import "./FrontPage.css";
import AdminPage from "./AdminPage";
import Home1 from "./Home1";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import WReg from "./WReg";
import Wcf from "./Wcf";
import SupportCenterPage from "../components2/SupportCenterPage";
import AboutUs from "../components1/AboutUs";
import ContactUs from "../components1/ContactUs";
import EventsCalendar from "../components1/EventsCalendar";

function FrontPage() {
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/Admin");
  };
  const handleUser = () => {
    navigate("/User");
  };
  return (
    <div className="options-container">
      <h1 className="title">Sonic Boom</h1>
      <div className="buttons">
        <Link to="/Admin">
          <button className="option-button admin-button">Admin</button>
        </Link>
        <Link to="/User">
          <button className="option-button user-button">User</button>
        </Link>
      </div>
      <Routes>
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/User" element={<Home1 />} />
        <Route path="/support" element={<SupportCenterPage />} />
        <Route path="/register-warranty" element={<WReg />} />
        <Route path="/warranty-claim" element={<Wcf />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events-calendar" element={<EventsCalendar />} />
      </Routes>
    </div>
  );
}

export default FrontPage;
