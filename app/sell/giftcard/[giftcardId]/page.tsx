"use client";

import React, { BaseSyntheticEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { giftcards } from "@/public/giftcardData";
import Navbar from "@/components/Navbar";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import styles from "@/css/giftcard.module.css";
import { Menu, Transition } from "@headlessui/react";
import Login from "@/app/login/page";
import LoginForm from "@/app/login/Form";
import { useSession } from "next-auth/react";

type sellingParamsType = {
  channel: string;
  amount: any;
};

const GiftcardView = ({ params }: { params: { giftcardId: string } }) => {
  const [customAmount, setCustomAmount] = useState();
  const userAuth = false;

  const cardDetails = giftcards.find(
    (giftcard) => giftcard.id === params.giftcardId
  );
  const router = useRouter();
  const session = useSession();

  const [sellingParams, setSellingParams] = useState({
    channel: "",
    amount: 0,
    cardName: cardDetails?.name,
    productId: cardDetails?.id,
  });
  const [open, setOpen] = useState(false);

  const [error, setError] = useState("");

  const handleChannel = (param: string) => {
    setSellingParams((prev) => {
      setError("");
      return {
        ...prev,
        channel: param,
      };
    });
    console.log(sellingParams);
  };

  const handleAmount = (param: number) => {
    setSellingParams((prev) => {
      return {
        ...prev,
        amount: param,
      };
    });

    console.log(sellingParams);
  };

  const handleCust = (e: BaseSyntheticEvent) => {
    const cleanedValue = e.target.value.toString().replace(/[^0-9.]/g, "");
    setSellingParams((prev) => {
      return {
        ...prev,
        amount: Number(cleanedValue),
      };
    });

    console.log(cleanedValue);
  };

  const formatCustomAmount = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSubmit = async () => {
    if (!session) {
      alert("Would you like to sign up?");
    } else {
      alert("You have an account");
    }
  };

  const listingsCont = cardDetails?.listings.map((price, idx) => {
    return (
      <button
        key={idx}
        name={`${price.dollar}`}
        onClick={(e) => {
          if (sellingParams.channel === "") {
            setError("Please select a channel");
          } else {
            handleAmount(price.dollar);
          }
        }}
        // disabled={sellingParams.channel === "" ? true : false}
        className={`border ${
          sellingParams.channel === "" && "hover:border-neutral-200"
        } disabled:cursor-not-allowed border-neutral-200 duration-300 rounded-3xl py-4 w-full h-full text-neutral-400 hover:border-neutral-500 ${
          sellingParams.amount === price.dollar &&
          "border-neutral-600 bg-neutral-50 text-neutral-700"
        }`}
      >
        <h4 className="md:text-2xl text-xl font-bold mb-2">{price.dollar}</h4>
      </button>
    );
  });

  return (
    <div
      className={`md:grid-cols-2 md:flex grid grid-flow-row md:justify-center max-md:place-items-center gap-16 max-w-screen-lg px-2 mx-auto py-16 border-green-400`}
    >
      <div className="grid max-w-lg md:justify-self-end">
        <Image
          src={`${cardDetails?.coverImage}`}
          width={600}
          height={600}
          alt={`${cardDetails?.title}`}
          className="sticky top-24"
        />
      </div>

      <div className="place-items-center text-left">
        <div className=" grid grid-flow-row gap-6">
          <h4
            className="md:text-5xl text-[1.8em]"
            style={{ fontWeight: "500" }}
          >
            {cardDetails?.title}
          </h4>
          <div>
            <p className="text-slate-400">{cardDetails?.description}</p>
          </div>
        </div>
        <div className="my-12 border-b pb-4">
          <div className="mb-12">
            <h4 className="text-xl" style={{ fontWeight: "500" }}>
              How would you like to send it?
            </h4>
            <p className="text-slate-400">
              Choose to send by live chat and get your payment in 5mins.
            </p>
          </div>
          <div className="h-24 place-items-center grid grid-flow-col gap-4 my-4">
            <button
              name="liveChat"
              onClick={() => handleChannel("liveChat")}
              className={`${
                sellingParams.channel === "liveChat" &&
                "border-pink-400 bg-pink-100"
              } border hover:bg-pink-50 duration-300 hover:border-pink-400 rounded-3xl w-full h-full flex justify-center gap-3 place-items-center`}
            >
              <ChatBubbleLeftRightIcon width={18} />
              Live Chat
            </button>
            <button
              name="whatsApp"
              onClick={() => handleChannel("whatsApp")}
              className={`${
                sellingParams.channel === "whatsApp" &&
                "border-green-400 bg-green-100"
              } border hover:bg-green-100 duration-300 hover:border-green-400 rounded-3xl w-full h-full flex align-middle place-items-center justify-center gap-3`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
              </svg>
              WhatsApp
            </button>
          </div>
          <p className="h-6 mt-3 grid place-items-center p-2 text-sm text-neutral-400">
            {error
              ? error
              : sellingParams.channel === "whatsApp" &&
                "*You will redirected to WhatsApp on your device"}
          </p>
        </div>
        <div>
          <h4
            className="text-neutral-400 text-xl"
            style={{ fontWeight: "500" }}
          >
            Choose an amount
          </h4>
          <div className="mt-4 gap-4 grid grid-flow-col-dense grid-cols-2 grid-rows-2">
            {listingsCont as React.ReactNode}
          </div>
          <div>
            <div className="my-4">
              <h4
                className="text-neutral-400 text-xl pb-4"
                style={{ fontWeight: "500" }}
              >
                Or enter an amount
              </h4>
              <div
                className={`border flex align-middle place-items-center px-4 border-neutral-200 rounded-2xl w- h-full text-neutral-600 hover:border-neutral-500 duration-300 text-xl placeholder:text-neutral-300 outline-none focus:outline-transparent focus:ring-0 ring-pink-200`}
              >
                <h4 className="text-2xl font-bold text-neutral-300 h-fit self-center">
                  $
                </h4>
                <input
                  type="number"
                  onChange={(e) => handleCust(e)}
                  onWheelCapture={(e) => e.preventDefault()}
                  className="w-full text-2xl p-4 border-0 focus:outline-none focus-within:ring-0"
                  style={{ fontWeight: "500" }}
                />
              </div>
            </div>
            <div>
              <p>Equivalent in Naira</p>
              <h4
                className="text-neutral-400 text-xl"
                style={{ fontWeight: "500" }}
              >
                {customAmount &&
                  (("N" + formatCustomAmount(sellingParams.amount)) as any) *
                    1370}
              </h4>
            </div>
          </div>
        </div>
        <div
          className="bg-neutral-100 p-4 rounded-xl my-8 w-full grid gap-4"
          style={{ fontWeight: "500" }}
        >
          <button
            disabled={
              sellingParams.amount === 0 || sellingParams.channel === ""
            }
            onClick={() => handleSubmit()}
            className="w-full text-center p-4 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:cursor-not-allowed hover:bg-pink-600 duration-300 disabled:hover:bg-neutral-200 bg-pink-500 text-white rounded-2xl"
          >
            Trade this
          </button>
          <Link
            href={"/terms"}
            className="text-slate-400 text-sm w-fit hover:text-slate-500 text-center p-2 mx-auto duration-300"
            style={{ fontWeight: "500" }}
          >
            Read our Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftcardView;
