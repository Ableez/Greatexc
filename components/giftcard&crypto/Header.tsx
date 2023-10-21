import React from "react";
// import { Button } from "@radix-ui/themes";

type Props = {};

function DashHeader({}: Props) {
  return (
    <div className="flex flex-wrap justify-between items-center text-center mb-4">
      <div className="grid place-items-center w-fit mx-auto text-center">
        <h4 className="text-6xl py-2" style={{fontWeight: "500"}}>Gift cards</h4>
        <p className="text-slate-500">Select a gift card to sell to us</p>
      </div>
      {/* <Button size={"3"}>WhatsApp</Button> */}
    </div>
  );
}

export default DashHeader;
