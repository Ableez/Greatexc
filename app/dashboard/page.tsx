"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

type Props = {};

const DashBoard = (props: Props) => {
  const { data: session } = useSession();
  console.log("dashboard", session);
  return (
    <div>
      <nav>
        <h4>{session?.user?.name}</h4>
        <button
          onClick={(e) => {
            signOut();
          }}
        >
          Sign out
        </button>
      </nav>
      <h4 className="text-4xl font-black">This is my Dashboard</h4>
    </div>
  );
};

export default DashBoard;
