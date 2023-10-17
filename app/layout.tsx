import "./globals.css";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Poppins } from "next/font/google";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import AuthProvider from "@/context/AuthProvider";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Exchange | Secure way to trade your gift cards",
  description:
    "This is an app for Great Exchange, meant to be used for trading of gift cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="full"
          scaling="95%"
        >
          <AuthProvider>{children}</AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
