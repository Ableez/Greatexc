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
import Skew from "components/Skew";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
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
