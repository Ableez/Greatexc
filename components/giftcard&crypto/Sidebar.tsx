import {
  BanknotesIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import {
  InformationCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const tabs = [
  {
    title: "Gift cards",
    icon: <Squares2X2Icon width={18} color="#444" />,
    link: "/dashboard",
  },
  {
    title: "Crypto currency",
    icon: <Squares2X2Icon width={18} color="#444" />,
    link: "/bitcoin",
  },
  {
    title: "Transactions",
    icon: <BanknotesIcon width={18} color="#444" />,
    link: "/dashboard/transactions",
  },
  {
    title: "Services",
    icon: <CogIcon width={18} color="#444" />,
    link: "/dashboard/services",
  },
  {
    title: "FAQs",
    icon: <InformationCircleIcon width={18} color="#444" />,
    link: "/dashboard/faq",
  },
];

type Props = {};

function Sidebar({}: Props) {
  const router = useRouter();
  const pathName = usePathname();

  const tabContents = tabs.map((tab, i) => {
    return (
      <li key={i}>
        <button
          onClick={() => router.push(tab.link)}
          className={`${
            pathName === tab.link
              ? "bg-pink-50 border-l-pink-500 hover:border-l-pink-500"
              : "hover:bg-pink-50 "
          } border-l-4 border-l-transparent hover:border-l-pink-200 transition-colors flex w-full items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group`}
        >
          {tab.icon}
          <span className="ml-3">{tab.title}</span>
        </button>
      </li>
    );
  });

  return (
    <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <form action="#" method="GET" className="md:hidden mb-2">
        <label htmlFor="sidebar-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="sidebar-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
          />
        </div>
      </form>
      <ul className="space-y-2">{tabContents}</ul>
    </div>
  );
}

export default Sidebar;
