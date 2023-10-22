import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Great Exchange | Secure way to trade your gift cards",
  description: "Chat with great exchange now to sell your gift cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Script src="https://embed.tawk.to/6535829aa84dd54dc483ee0a/1hdcgcbje"></Script> */}
      {children}
    </>
  );
}
