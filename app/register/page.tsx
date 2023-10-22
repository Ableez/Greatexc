import React from "react";
import RegisterForm from "./Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

const Register = async (props: Props) => {
  const session = await getServerSession();

  if (session) {
    console.log("you need to sign out from present account");
    redirect("/sell/giftcard");
  }

  return <RegisterForm />;
};

export default Register;
