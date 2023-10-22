import User from "@/lib/models/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);

        const user = await User.findOne({
          email: credentials.email,
        })
        console.log(user);

        const compare = await bcrypt.compare(
          credentials.password,
          user.password
        );

        console.log(compare);

        if (user && compare) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };
