import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import User from "@/lib/models/user";
import { connectToDb } from "@/lib/utils/mongodb";

const handler = async (request: NextRequest) => {
  try {
    const { username, email, password } = await request.json();

    await connectToDb();

    const usernameExists = await User.findOne({ username: username });
    const emailExists = await User.findOne({ email: username });

    if (usernameExists) {
      console.log("username already exists");
      return NextResponse.json({ message: "Username is taken" });
    }
    if (emailExists) {
      console.log("email already exists");
      return NextResponse.json({
        message: "An account has been registered with this email",
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      return NextResponse.json(
        { message: "success" },
        { status: 200, statusText: "Account created success" }
      );
    } else {
      return NextResponse.json(
        { message: "Error" },
        { status: 500, statusText: "Error creating account" }
      );
    }
  } catch (e) {
    console.log({ e });
  }
};

export { handler as POST };
