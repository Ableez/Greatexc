import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="my-32">
      <h4 className="md:text-4xl text-3xl font-bold md:px-4 pb-4">
        Benefits of trading with us
      </h4>
      <div className="md:flex grid grid-flow-row align-top justify-between place-items-start gap-12  max-w-screen-lg mx-auto px-4">
        <div className="place-items-center text-center">
          <div className="p-6">
            <Image
              className="mx-auto p-4"
              width={80}
              height={80}
              src={"/secure_feature.svg"}
              alt="secure"
            />
            <h4 className="font-bold text-lg">Secure & Safe 💯</h4>
          </div>
          <p className="text-black text-opacity-60 text-[1em] md:text-base">
            Great exchange assures you Safety, Security, and Transparency when
            trading your Digital assets with us with
          </p>
        </div>
        <div className="place-items-center text-center">
          <div className="p-6">
            <Image
              className="mx-auto p-4"
              width={80}
              height={80}
              src={"/satisfaction.svg"}
              alt="secure"
            />
            <h4 className="font-bold text-lg">
              Customer Interaction & Satisfaction 🙂
            </h4>
          </div>
          <p className="text-black text-opacity-60 text-[1em] md:text-base">
            All customers at Great Exchange has the right and access to a great
            trading experience Our customer is our success
          </p>
        </div>
        <div className="place-items-center text-center">
          <div className="p-6">
            <Image
              className="mx-auto p-4"
              width={80}
              height={50}
              src={"/rates.svg"}
              alt="secure"
            />
            <h4 className="font-bold text-lg">
              Great Rates & Swift Payout 🏃💨
            </h4>
          </div>
          <p className="text-black text-opacity-60 text-[1em] md:text-base">
            Definitely our rates for all Giftcards and cryptocurrencies are high
            not leaving out our fast payment system
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
