import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    bio?: string;
    phone?: string;
    location?: string;
    social?: string;
    occupation?: string;
    maritalStatus?: string;
  }

  interface Session {
    user: User;
  }
}
