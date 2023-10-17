import React from "react";
import { Button } from "@radix-ui/themes";
import Image from "next/image";

type Props = {};

const ServiceDetail = (props: Props) => {
  return (
    <div>
      <section className="bg-pink-100 text-left dark:bg-gray-900 py-32 px-8 md:px-16">
        <div className="grid max-w-screen-xl mx-auto md:gap-8 xl:gap-0 md:grid-cols-12 gap-[5em]">
          <div className="md:justify-self-end justify-self-start md:mt-0 md:col-span-5 md:flex md:order-1 -order-last">
            <Image
              width={200}
              height={400}
              src="/bnsbitcoin.png"
              alt="mockup"
              className="rounded-2xl w-screen md:min-w-full"
            />
          </div>
          <div className="md:place-self-center place-self-start md:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Buy & Sell Bitcoin
            </h1>
            <p className="max-w-xl mb-6 font-light text-gray-500 md:mb-8  dark:text-gray-400 my-12">
              Crypto Currencies is the future of money, and it is already
              becoming the worl`&apos`s leading industry in terms of market
              capital, that is why we at Geat Exchange are offering you a great
              means to trade your Crypto Currencies.
            </p>
            <Button
              size={"3"}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white text-left dark:bg-gray-900 py-32 px-8 md:px-16">
        <div className="grid max-w-screen-xl mx-auto md:gap-8 xl:gap-0 md:grid-cols-12 gap-[5em]">
          <div className="md:justify-self-end justify-self-start md:mt-0 md:col-span-5 md:flex">
            <Image
              width={200}
              height={400}
              src="/bnscards.png"
              alt="mockup"
              className="rounded-2xl w-screen md:min-w-full"
            />
          </div>
          <div className="md:place-self-center place-self-start md:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Exchange Giftcards
            </h1>
            <p className="max-w-xl mb-6 font-light text-gray-500 md:mb-8  dark:text-gray-400 my-12">
              Great Exchange offers you a secure way to trade your gift cards to
              physical cash giving you detailed guides lines and great rates.
            </p>
            <Button
              size={"3"}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
