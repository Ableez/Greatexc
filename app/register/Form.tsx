"use client";

import Image from "next/image";
import React, { BaseSyntheticEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const RegisterForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: BaseSyntheticEvent) => {
    const name = e.target.name;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  };

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (
      formData.username === "" ||
      formData.password === "" ||
      formData.email === ""
    ) {
      console.log("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.status === 200) {
        console.log("Successfully registered, now logging in");
        const signinResp = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (signinResp) {
          console.log("Successfully logged in");
          router.replace("/sell/giftcard");
        } else {
          console.log("Failed to sign in");
          setLoading(false);
        }
      } else {
        console.log("Failed to register");
        setLoading(false);
      }

      console.log({ response });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className=" h-screen grid place-items-center bg-pink-50">
      <div className="max-w-md w-full space-y-4">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 text-left bg-white p-8 rounded-2xl"
        >
          <div className="flex mx-auto mb-4 place-items-center align-middle justify-center gap-4 w-fit">
            <Image
              src={"greatexc-logo.svg"}
              width={30}
              height={30}
              alt="Great Exchange Logo"
            />
            <h4 className="text-xl font-bold">Great Exchange</h4>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="block w-full rounded-2xl border-0 py-3 text-lg text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-[0.4px] ring-[1px] ring-pink-200 autofill:bg-red-400 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Email
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                // onChange={handleInputChange}
                className="block w-full rounded-2xl border-0 py-3 text-lg text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-[0.4px] ring-[1px] ring-pink-200 autofill:bg-red-400 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-pink-600 hover:text-pink-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-2xl border-0 py-3 text-lg text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-[0.4px] ring-[1px] ring-pink-200 autofill:bg-red-400 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="flex disabled:bg-pink-300 disabled:cursor-not-allowed w-full justify-center rounded-2xl bg-pink-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </div>
          <div>
            <h4 className="mx-auto w-fit">Or</h4>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-2xl bg-pink-100 py-3 text-sm font-semibold leading-6 px-8 shadow-sm border border-transparent hover:border-pink-400 text-black"
            >
              Sign in with Google
            </button>
          </div>
        </form>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-2xl bg-white py-3 text-sm font-semibold leading-6 px-8 shadow-sm border border-transparent hover:border-pink-400 text-black"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
