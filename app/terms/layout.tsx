import type { Metadata } from "next";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export const metadata: Metadata = {
  title: "Terms | Great Exchange",
  description:
    "Great exchange terms and conditions that governs our customer relationship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
