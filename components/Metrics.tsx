import React from "react";
import { Flex } from "@radix-ui/themes";

type Props = {};

const Metrics = (props: Props) => {
  return (
    <div className="metrics py-10 md:px-16 px-4 md:flex-row flex-col flex align-middle place-items-center justify-center md:gap-[7em] gap-[3em]">
      <div>
        <h4 className="text-2xl font-semibold">Fast and reliable payouts</h4>
      </div>
      <div className="flex md:flex-row  align-middle justify-between place-items-center gap-10">
        <div>
          <h4 className="text-4xl mb-4 font-bold">5min</h4>
          <p className="">Delay</p>
        </div>
        <div>
          <h4 className="text-4xl mb-4 font-bold">0</h4>
          <p className="">Scams Reported</p>
        </div>
        <div>
          <h4 className="text-4xl mb-4 font-bold">0</h4>
          <p className="">Ripping</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
