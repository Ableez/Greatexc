import { Button, Text } from "@radix-ui/themes";
import styles from "../app/css/hero.module.css";
import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="md:p-32 px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <Text>
          <p className="text-4xl font-bold">
            We Buy Your Gift Cards & Crypto Currencies For Instant Cash.
          </p>
          <p
            className="py-6 text-opacity-25 md:px-16 px-4"
          >
            We buy Apple iTunes, Google Play, Nordstorm, Steam, Sephora, Amazon,
            Walmart, Visa, American Express and a lot more from various brands
            and countries.
          </p>
        </Text>
      </div>

      <Button size={"3"} className="mt-16">
        Get Started
      </Button>
    </div>
  );
};

export default Service;
