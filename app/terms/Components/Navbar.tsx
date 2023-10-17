


import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-pink-100 p-8">
      <ul className="flex align-middle justify-start gap-6">
        <li>
          <Link href={".."} className="font-semibold flex w-fit align-middle place-items-center gap-2">
            <ArrowLeftIcon width={14} /> Back
          </Link>
        </li>
        <li>
          <Link href={"#privacy"}>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
