"use client";
import React from "react";
import styles from "../css/hero.module.css";
import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const { scrollY, scrollX } = useScroll();
  const y2 = useTransform(scrollY, [0, 400], [0, -150]);
  const x2 = useTransform(scrollX, [0, 400], [0, -150]);

  return (
    <motion.div
      style={{
        background: "linear-gradient(228deg, #FFF1F8 -0.6%, #FFF1F8 24.35%, #FFE5F2 49.3%, #FFD5EA 74.25%, #FFD8EC 99.2%) border-2",
      }}
      className="text-center pt-16 min-h-fit md:h-screen overflow-clip bg-pink-100"
    >
      <div className="max-w-4xl mx-auto">
        <Text>
          <span className={`${styles.header} py-16 md:text-[4.5em] font-black text-[2.5em]`}>
            Sell Gift Cards & Crypto Currencies for Instant Cash.
          </span>
          {/* <span className="text-6xl">🤑</span> */}

          <p className="py-8 text-base md:px-16 px-4">
            Great Exchange provides effortless means of trading all Giftcards
            and Cryptocurrencies
          </p>
        </Text>

        <Button size={"4"} className="pt-8">Get Started</Button>
        <motion.div
          style={{ y: y2, x: x2 }}
          className="mx-auto w-fit z-[-10] mt-8"
        >
          <Image
            alt="phone mockup"
            width={300}
            height={300}
            src={"/phone.png"}
            className="pt-16"
          ></Image>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
