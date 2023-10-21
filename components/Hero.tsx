"use client";
import React from "react";
import styles from "../css/hero.module.css";
import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const router = useRouter();

  return (
    <section
      className="bg-pink-100 "
      style={{
        background:
          "linear-gradient(228deg, #FFF1F8 -0.6%, #FFF1F8 24.35%, #FFE5F2 49.3%, #FFD5EA 74.25%, #FFD8EC 99.2%) border-2",
      }}
    >
      <div className="max-w-screen-lg mx-auto text-center md:text-left overflow-clip justify-center gap-8 py-16 grid grid-flow-row md:grid-flow-col h-[130vh] md:h-screen md:px-8">
        <div className="mx-auto md:px-0 lg:px-0 px-4 h-fit">
          <div>
            <span
              className={`${styles.header} py-16 md:text-[3.8em] font-black text-[2em]`}
            >
              Sell Gift Cards & Crypto Currencies for Instant Cash.
            </span>
            {/* <span className="text-6xl">🤑</span> */}

            <p className="py-8 text-base text-slate-500">
              Great Exchange provides effortless means of trading all Giftcards
              and Cryptocurrencies
            </p>
          </div>
          <Link href={"/sell/giftcard"}>
            <Button size={"4"} className="cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="h-fit place-items-center grid">
          <Image
            alt="phone mockup"
            width={300}
            height={300}
            src={"/phone.png"}
            className="w-[60vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
