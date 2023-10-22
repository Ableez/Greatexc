import React from "react";
import LoginForm from "./Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

const Login = async (props: Props) => {
  const session = await getServerSession();

  if (session) {
    redirect("/sell/giftcard");
  }
  return <LoginForm />;
};

export default Login;
