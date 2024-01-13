"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import {
  ADMIN_ROUTE,
  CLIENT_COMPONENET_ROUTE,
  SERVER_COMPONENET_ROUTE,
  SETTINGS_ROUTE,
} from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === SETTINGS_ROUTE ? "default" : "outline"}
        >
          <Link href={SETTINGS_ROUTE}>Settings</Link>
        </Button>
        <Button
          asChild
          variant={pathname === SERVER_COMPONENET_ROUTE ? "default" : "outline"}
        >
          <Link href={SERVER_COMPONENET_ROUTE}>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === CLIENT_COMPONENET_ROUTE ? "default" : "outline"}
        >
          <Link href={CLIENT_COMPONENET_ROUTE}>Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === ADMIN_ROUTE ? "default" : "outline"}
        >
          <Link href={ADMIN_ROUTE}>Admin</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
