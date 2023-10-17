"use client";
import Contact from "components/Contact";
import Cwu from "components/Cwu";
import Features from "components/Features";
import Feedbacks from "components/Feedbacks";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Metrics from "components/Metrics";
import Navbar from "components/Navbar";
import Service from "components/Service";
import ServiceDetail from "components/ServiceDetail";

const Home = async () => {

  return (
    <main className="">
      <Navbar />
      <Hero />
      <Service />
      <Metrics />
      <Cwu />
      <Features />
      <ServiceDetail />
      <Feedbacks />
      <Contact />
      <Footer />
    </main>
  );
};
