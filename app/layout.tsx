import "./globals.css";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Poppins } from "next/font/google";
import MotherLayout from "@/components/MotherLayout";

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
          <MotherLayout>{children}</MotherLayout>
        </Theme>
      </body>
    </html>
  );
}
