"use client";

import { useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, {useState, useEffect} from "react";

type Props = {};

const Skew = (props: Props) => {
  const yskew = window.screenY;
  const [yscroll, setScroll] = useState(0)


  return (
    <div>
      <Image
        src={"/Brjfci7H61yJcEOePluvumPgE.webp"}
        alt=""
        style={{
          transform: `skew(${yskew}deg)`,
        }}
        width={500}
        height={500}
      />
    </div>
  );
};

export default Skew;
