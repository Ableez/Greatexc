import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Pagination } from "swiper/modules";
import styles from "../css/feedback.module.css";
type Props = {};

interface StarsProps {
  userStars: number;
  totalStars?: number;
}

const feedbacks = [
  {
    user: {
      username: "Adeseware",
      profileUrl:
        "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBhdmF0YXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    content: {
      stars: 5,
      comment:
        "Great Exchange is a fantastic platform for gift card exchange! It simplifies everything, from managing my cards to seamless transactions. I'm thrilled with the convenience it offers.",
    },
  },
  {
    user: {
      username: "Bernard",
      profileUrl:
        "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    content: {
      stars: 4,
      comment:
        "Great Exchange is an excellent choice for gift card swapping. It has all my essential information neatly organized. The ease of use is impressive.",
    },
  },
  {
    user: {
      username: "Chisom",
      profileUrl:
        "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&xid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    },
    content: {
      stars: 5,
      comment:
        "Great Exchange has been a game-changer for me in the gift card exchange world. It's a one-stop solution that takes care of everything. Highly recommended!",
    },
  },
  {
    user: {
      username: "Darek",
      profileUrl:
        "https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    },
    content: {
      stars: 4,
      comment:
        "Great Exchange is a reliable platform for managing and trading gift cards. It keeps my important details secure and simplifies the process. Kudos to the team!",
    },
  },
];

const Feedbacks = (props: Props) => {
  return (
    <div className="bg-pink-100 px-4 md:px-8 py-16">
      <h4 className="font-black text-2xl mb-8">Feedbacks</h4>
      <div className="md:p-16">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
         
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className={`grid ${styles.swiper} px-2 `}
        >
          {feedbacks.map((feedback) => {
            const userStars = feedback.content.stars;
            const greyStars = 5 - userStars;

            return (
              <SwiperSlide
                key={feedback.user.username}
                className="border p-6 py-10 rounded-2xl  bg-purple-200 cursor-pointer duration-300"
              >
                <motion.div className=" rounded-2xl grid grid-flow-row grid-rows-2">
                  <div className="row-span-6">
                    <p className="text-neutral-800 text-left">
                      {feedback.content.comment}
                    </p>
                  </div>
                  <div className="flex align-middle justify-start w-fit gap-2 mt-6 row-span-2">
                    <div>
                      <Image
                        src={feedback.user.profileUrl}
                        width={40}
                        height={40}
                        className="aspect-square object-cover object-top rounded-3xl"
                        alt={`${feedback.user.username}'s profile image'`}
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-sm uppercase tracking-wide">
                        {feedback.user.username}
                      </h4>
                      <div className="grid grid-flow-col w-fit mt-1">
                        {Array(userStars)
                          .fill(0)
                          .map((_, idx) => (
                            <span key={idx}>
                              <StarIcon width={13} color="#888888" />
                            </span>
                          ))}
                        {Array(greyStars)
                          .fill(0)
                          .map((_, idx) => (
                            <span key={idx}>
                              <StarIcon width={13} color="#ffffff" />
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
          <div className="mt-16 swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedbacks;
