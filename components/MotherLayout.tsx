"use client";

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const MotherLayout = ({ children }: Props) => {
  const pathName = usePathname();

  return (
    <div>
      <SessionProvider>
        {pathName !== "/login" && pathName !== "/register" && <Navbar />}
        {children} <Footer />
      </SessionProvider>
    </div>
  );
};

export default MotherLayout;
