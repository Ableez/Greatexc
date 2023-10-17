import Image from "next/image";
import React from "react";
type Props = {};

const Features = (props: Props) => {
  return (
    <div className="md:flex grid grid-flow-row align-top justify-between place-items-start gap-16 m-16 py-16">
      <div className="place-items-center text-center">
        <div className="p-6">
          <Image
          className="mx-auto p-4"
            width={90}
            height={90}
            src={"/secure_feature.svg"}
            alt="secure"
          />
          <h4 className="font-bold">Secure & Safe 💯</h4>
        </div>
        <p>
          Great exchange assures you Safety, Security, and Transparency when
          trading your Digital assets with us with
        </p>
      </div>
      <div className="place-items-center text-center">
        <div className="p-6">
          <Image
          className="mx-auto p-4"
            width={90}
            height={90}
            src={"/satisfaction.svg"}
            alt="secure"
          />
          <h4 className="font-bold">Customer Interaction & Satisfaction 🙂</h4>
        </div>
        <p>
          All customers at Great Exchange has the right and access to a great
          trading experience Our customer is our success
        </p>
      </div>
      <div className="place-items-center text-center">
        <div className="p-6">
          <Image
          className="mx-auto p-4" width={90} height={50} src={"/rates.svg"} alt="secure" />
          <h4 className="font-bold">Great Rates & Swift Payout 🏃💨</h4>
        </div>
        <p>
          Definitely our rates for all Giftcards and cryptocurrencies are high
          not leaving out our fast payment system
        </p>
      </div>
    </div>
  );
};

export default Features;
