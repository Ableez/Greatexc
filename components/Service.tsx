import { Button, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="md:p-32 px-4 py-32">
      <div className="max-w-screen-lg mx-auto">
        <p className="md:text-5xl text-3xl font-bold">
          We Buy Your Gift Cards & Crypto Currencies For Instant Cash.
        </p>
        <p className="py-12 text-opacity-60 text-black md:px-16 md:text-base text-[1em] md:w-[50vw]  mx-auto">
          We buy Apple iTunes, Google Play, Nordstorm, Steam, Sephora, Amazon,
          Walmart, Visa, American Express and a lot more from various brands and
          countries.
        </p>
      </div>
      <Link href={"/sell/giftcard"}>
        <Button size={"4"} className="mt-16">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Service;
