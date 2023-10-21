import Image from "next/image";
import Link from "next/link";
import React from "react";
import { giftcards } from "@/public/giftcardData";

type Props = {};

function CardsListings({}: Props) {
  const content = giftcards.map((card, idx) => {
    return (
      <Link prefetch href={`/sell/giftcard/${card.id}`} key={card.name}>
        <div
          className="bg-slate-100 select-none rounded-2xl h-52 md:h-64 grid place-items-center cursor-pointer border hover:border-slate-400 hover:shadow-sm shadow-purple-100"
          style={{ transition: "border 0.3s ease" }}
        >
          <Image width={80} height={80} className="w-20 md:w-fit" src={card.image} alt={card.name} />
        </div>
      </Link>
    );
  });

  return (
    <div className="py-8 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 lg:px-0 md:px-8 px-2">
        {content}
      </div>
      <button className="mt-2 border hover:bg-pink-100 p-2 rounded-full px-4">Load more</button>
    </div>
  );
}

export default CardsListings;
