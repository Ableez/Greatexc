"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const tabs = [
  {
    title: "Gift cards",
    link: "/sell/giftcard",
  },
  {
    title: "Crypto Currency",
    link: "/sell/giftcard",
  },
  {
    title: "Our Terms",
    link: "/terms",
  },
  {
    title: "FAQs",
    link: "/faq",
  },
];

function Navbar({}: Props) {
  const pathName = usePathname();

  const navTabs = tabs.map((tab, idx) => {
    return (
      <Link
        key={idx}
        href={tab.link}
        className={`border-b-2 p-1 ${
          tab.link === pathName ? "border-b-pink-400" : "border-b-transparent"
        }`}
      >
        {tab.title}
      </Link>
    );
  });
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md border-b md:px-16 py-4 dark:bg-gray-800 px-2 dark:border-gray-700 left-0 right-0 z-50  sticky top-0 ">
      <div className="flex flex-wrap justify-between items-centermd:px-36">
        <div className=" flex justify-start items-center">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <a href="/" className="flex items-center justify-between mr-4">
            <Image
              width={25}
              height={25}
              src="/greatexc-logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Great Exchange
            </span>
          </a>
        </div>

        <nav className="grid-flow-col gap-6 hidden md:grid">{navTabs}</nav>
        <Link href={"/sell/giftcard"}>
          <button
            className="px-8 py-3 bg-pink-500 rounded-full text-white hover:bg-pink-400 duration-300 border border-transparent hover:border-pink-600"
            style={{ fontWeight: "500" }}
          >
            Sell
          </button>
        </Link>

        {/* WHEN A USER IS AUTHENTICATED */}
      </div>
    </nav>
  );
}

export default Navbar;
