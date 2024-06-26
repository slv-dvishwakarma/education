import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const proximaNovaFont = localFont({
  src: [
    { path: "../public/fonts/Proximanova-thin.otf", weight: "100" },
    { path: "../public/fonts/Proximanova-light.otf", weight: "200" },
    { path: "../public/fonts/Proximanova-regular.otf", weight: "300" },
    { path: "../public/fonts/Proximanova-medium.otf", weight: "400" },
    { path: "../public/fonts/Proximanova-semibold.otf", weight: "600" },
    { path: "../public/fonts/Proximanova-extrabold.otf", weight: "900" },
  ],
  variable: "--proxima-nova-font",
});

const gorditaFont = localFont({
  src: [
    { path: "../public/fonts/Gordita-Light.otf", weight: "200" },
    { path: "../public/fonts/Gordita-Regular.otf", weight: "300" },
    { path: "../public/fonts/Gordita-Medium.otf", weight: "400" },
    { path: "../public/fonts/Gordita-Bold.otf", weight: "600" },
    { path: "../public/fonts/Gordita-Black.otf", weight: "900" },
  ],
  variable: "--spring-font",
});

import "./globals.css";
import { Cookies } from "@/components/core";

export const metadata: Metadata = {
  title: "Skilline - Education",
  description:
    "Transforming Education and Skill Development for an Empowered India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(gorditaFont.className, proximaNovaFont.className)}>
        <Header />
        {children}
        <Cookies />
        <Footer />
      </body>
    </html>
  );
}
