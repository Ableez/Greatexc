"use client";
import React from "react";
import DashHeader from "@/components/giftcard&crypto/Header";
import CardsListings from "@/components/giftcard&crypto/CardsListings";

type Props = {};

const GiftCard = (props: Props) => {
  return (
    <div className="my-16">
      <DashHeader />
      <CardsListings />
    </div>
  );
};

export default GiftCard;
