"use client";

import { Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { BaseSyntheticEvent, useEffect, useState } from "react";

type Props = {};

const Register = (props: Props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
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

  useEffect(() => {
    if (
      formData.password !== formData.confirmPassword &&
      formData.password.length > 8 &&
      formData.confirmPassword.length > 4
    ) {
      setError("Passwords do not match");

      return;
    }
    if (formData.password === formData.confirmPassword) {
      setError("");
      return;
    }

    if (
      formData.password.length > 8 &&
      !formData.password.includes(`${/0-9/}`)
    ) {
      setError("Invalid password. password must be contain at least 1 number");
      return;
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.phoneNumber === ""
    ) {
      setError("All fields are required!");
      return;
    }

    try {
      // old check if user exists method
      // {
      //   const userExists = await fetch("api/userExists", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: formData.email,
      //     }),
      //   });

      //   const userExistsData = userExists.json();
      //   console.log(userExistsData, "userExists");
      // }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        }),
      });

      console.log(res.ok);
      if (res.ok) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError("Error registering user");
      setLoading(false);
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
            <Text className="text-red-500 p-10 ">{error ? error : " "}</Text>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
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
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  email
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
              <div>
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
              </div>
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
              <div>
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
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      onChange={(e) => handleFormChange(e)}
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark dark:ring-offset-gray-800"
                      required={false}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
              <button
                onClick={(e) => e.preventDefault()}
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
