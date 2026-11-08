import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar/Navbar";
import { FloatingButton } from "@/src/components/UI/FloatingButton/FloatingButton";

export const metadata: Metadata = {
  title: "MAYA Tech | Soluciones Tecnológicas",
  description: "Armado de PC, mantenimiento y desarrollo de software a la medida para estudiantes, gamers, creadores y negocios.",
  icons: {
    icon: "./favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div aria-hidden="true" className="h-[140px] shrink-0" />
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
