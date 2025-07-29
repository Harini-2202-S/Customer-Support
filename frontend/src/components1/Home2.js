import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import EventsCalendar from "./EventsCalendar";
import AdminPage from "../components/AdminPage";
import Wcf from "../components/Wcf";
import WReg from "../components/WReg";
import SupportCenterPage from "../components2/SupportCenterPage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ContactForm from "../components2/ContactForm";
function Home2() {
  return (
    <div class="container-full">
      <nav class="nav bg-dark">
        <ul class="nav-links ">
          <li class="nav-brand">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0V5kuXq9XaNWZiD8B9LvledHCJG13z2ve-g&s"
              alt="Logo"
              style={{
                maxWidth: "40px",
                maxHeight: "40px",
                borderRadius: "50%",
                margin: "0 5px",
              }}
            />
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/support">SUPPORT</Link>
          </li>
          <li>
            <Link to="/register-warranty">REGISTER WARRANTY</Link>
          </li>
          <li>
            <Link to="/warranty-claim">WARRANTY CLAIM</Link>
          </li>
          <li>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/events-calendar">EVENTS</Link>
          </li>
          <li>
            <Link to="/admin-page">ADMIN</Link>
          </li>
        </ul>
      </nav>
      <div class="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<SupportCenterPage />} />
          <Route path="/register-warranty" element={<WReg />} />
          <Route path="/warranty-claim" element={<Wcf />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events-calendar" element={<EventsCalendar />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
      </div>
      {/* {<Footer />} */}
    </div>
  );
}

export default Home2;
