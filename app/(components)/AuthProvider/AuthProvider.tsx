import { SessionProvider } from "next-auth/react";
import React from "react";

export interface IAuthProvider {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: IAuthProvider): React.ReactElement {
  return <SessionProvider>{children}</SessionProvider>;
}
