"use client";

import { supabase } from "@/supabase/supabase";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = supabase.auth.getUser();
  const router = useRouter();

  //   useEffect(() => {
  //     const gt = async () => {
  //       const session = await supabase.auth.getSession();

  //       if (session.data.session === null) {
  //         // No session, so redirect to the landing page or any login page.
  //         router.replace("/login");
  //       }
  //     };

  //     gt();
  //   }, [user, router]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
