import NextAuth from "next-auth";
import { options } from "./options";

export const { GET, POST } = NextAuth(options);
