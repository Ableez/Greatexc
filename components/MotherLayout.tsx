"use client"

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const MotherLayout = ({ children }: Props) => {
  const pathName = usePathname();

  return (
    <div>
      {pathName !== "/login" && pathName !== "/register" && <Navbar />}
      {children} <Footer />
    </div>
  );
};

export default MotherLayout;
