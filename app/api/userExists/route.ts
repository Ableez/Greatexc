import { connectToDb } from "lib/mongodb";
import User from "models/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb();

    const { email } = await req.json();

    const user = await User.findOne({ email }).select("_id");

    if (user) {
      console.log("User exists");
      return NextResponse.json(true);
    } else {
      console.log("Allowed to register");
      return NextResponse.json(false);
    }
  } catch (error) {
    console.error("Something went wrong checking if user already exists", error);
  }
};
