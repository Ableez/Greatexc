"use client";
import { auth, db, googleAuthProvider } from "@/lib/utils/firebase";
import { Text } from "@radix-ui/themes";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";

type Props = {};

const Login = (props: Props) => {
  const [formData, setFormData] = useState({
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
        [e.target.name]: e.target.value,
      };
    });
  };

  // submit
  // const handleSubmit = async (e: BaseSyntheticEvent) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   if (formData.email === "" || formData.password === "") {
  //     setError("All fields are required!");
  //     return;
  //   }

  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: formData.email,
  //       password: formData.password,
  //     });

  //     if (error) {
  //       // error during sign in
  //       setError(error.message);
  //       setLoading(false);
  //     }

  //     if (data) {
  //       // sign in successful
  //       setLoading(false);
  //       router.push("/dashboard");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError("Error registering user");
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const loginWithGoogle = async () => {
  //   let { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //   });

  //   console.log("data", data);
  //   console.log("error", error);
  //   if (!error) {
  //     redirect("/dashboard");
  //   }
  // };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const signIn = await signInWithRedirect(auth, googleAuthProvider);

      const userDoc = doc(collection(db, "users"), auth.currentUser?.uid);

      const userData = {
        ...formData,
        uid: auth.currentUser?.uid,
        photoUrl: auth.currentUser?.photoURL,
      };

      await setDoc(userDoc, userData);

      // if (signIn) {
      //   redirect("/giftcard");
      //   setLoading(false);
      // }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const signInWithEmail = async () => {
    setLoading(true);
    try {
      const signIn = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const token = await signIn.user.getIdToken();

      Cookies.set("authToken", token, { expires: 7 });
      Cookies.set("uid", signIn.user.uid, { expires: 7 });

      // if (signIn.user) {
      //   redirect("/giftcard")
      // }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="#"
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
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <Text className="text-red-500 p-10 ">{error ? error : " "}</Text>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => {
                    handleFormChange(e);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
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
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();

                  signInWithEmail();
                }}
                disabled={loading}
                className="w-full text-white bg-pink-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-pink-10"
              >
                Login
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signInWithGoogle();
                }}
                disabled={loading}
                type="button"
                className="w-full text-neutral-700 bg-white border hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login with Google
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="./register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
