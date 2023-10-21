"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const Cwu = (props: Props) => {
  // const { scrollY } = useScroll();
  // const [y2, setY2] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //       setY2((window.scrollY - 1400) / 5);
  //   };

  //   console.log(window.screenY);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // motion.div
    <div>
      <h4 className="md:text-4xl text-3xl font-bold py-16 px-16 md:px-4">
        Chat with us live
      </h4>

      <div className="bg-pink-200 w-fit rounded-t-2xl mx-auto overflow-clip">
        {/* motion.div */}
        <div className="mx-auto">
          <Image
            alt="phone mockup"
            width={2000}
            height={2000}
            src={"/Image.png"}
            className="w-[90vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Cwu;
