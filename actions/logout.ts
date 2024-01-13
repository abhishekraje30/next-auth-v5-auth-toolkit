"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // Some server side logic before logout
  await signOut();
};
