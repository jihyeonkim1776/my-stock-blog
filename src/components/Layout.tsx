"use client";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import { SessionProvider } from "next-auth/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
