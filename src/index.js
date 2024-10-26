import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import HomePage from "./landing_page/home/Homepage";
import AboutPage from "./landing_page/about/Aboutpage";
import EventPage from "./landing_page/events/Eventpage";
import BlogPage from "./landing_page/blog/Blogpage";
import ContactPage from "./landing_page/contact_us/Contactpage";
import Signup from "./landing_page/signup/Signup";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
