import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Service from "./Service";
import Metrics from "./Metrics";
import Cwu from "./Cwu";
import Features from "./Features";
import ServiceDetail from "./ServiceDetail";
import UserFeedBacks from "./UserFeedBacks";
import Contact from "./Contact";
import Footer from "./Footer";

type Props = {};

function LandingPage({}: Props) {
  return (
    <main className="">
      <Hero />
      <Service />
      <Metrics />
      <Cwu />
      <Features />
      <ServiceDetail />
      <UserFeedBacks />
      <Contact />
    </main>
  );
}

export default LandingPage;
