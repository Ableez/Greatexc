import { connectToDb } from "lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    const { username, email, password, phoneNumber } = await req.json();

    await connectToDb();

    const user = await User.findOne({ email }).select("_id");
    console.log(user);

    if (user?._id) {
      console.log("User already exists");
      return NextResponse.json(
        { message: "User already exists" },
        { status: 403 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username: username,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    return NextResponse.json(
      { message: "Success registered" },
      { status: 201 }
    );
  } catch (error) {
    console.log("error registering user", error);
  }
};
