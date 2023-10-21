"use client";

import { Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { supabase } from "@/supabase/supabase";

type Props = {};

const Register = (props: Props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormChange = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  const router = useRouter();

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    if (formData.email === "" || formData.password === "") {
      setError("All fields are required!");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      console.log({ data, error });

      // if (error) {
      //   // error during sign up
      //   setError(error.message);
      //   console.log(error, "error during sign up");
      //   setLoading(false);
      // }

      if (data) {
        // all good, sign in user and direct to giftcards page
        const { data: signin, error: signinErrr } =
          await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          });

        if (signin) {
          setLoading(false);
          console.log("!!!!!!signed in");

          redirect("/giftcards");
        } else if (signinErrr) {
          console.log("oh shit! error during login");
        }
      }
    } catch (error) {
      console.log(error);
      setError("Error registering user");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    let { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (!error) {
      redirect("/dashboard");
    }
  };

  return (
    <section className="bg-pink-100 dark:bg-gray-900 text-left">
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            width={20}
            height={20}
            className="w-8 h-8 mr-2"
            src="/greatexc-logo.svg"
            alt="logo"
          />
          Great Exchange
        </Link>
        <div className="w-full bg-white rounded-2xl dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Set up an account
            </h1>
            {loading && "Loading..."}
            <Text className="text-red-500 p-6 ">{error ? error : " "}</Text>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 md:space-y-6"
            >
              {/* <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  username
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  placeholder="praise"
                  required={true}
                />
              </div> */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Username
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  placeholder="praise"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  placeholder="praise@greatexchange.com"
                  required={true}
                />
              </div>
              {/* <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  placeholder="0810 341 8286"
                  required={true}
                />
              </div> */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  required={true}
                />
              </div>
              {/* <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  required={true}
                />
              </div> */}
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-pink-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  loginWithGoogle();
                }}
                type="submit"
                className="w-full text-neutral-700 bg-white border hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up with Google
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="./login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
