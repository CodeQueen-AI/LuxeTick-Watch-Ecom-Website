"use client";
import { Poppins, Allura } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

type Props = { children: ReactNode };
export default function ClientWrapper({ children }: Props) {
  return (
    <div className={`${poppins.variable} ${allura.variable}`}>
      {children}
    </div>
  );
}