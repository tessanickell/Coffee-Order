import type { Metadata } from "next";
import { Literata } from "next/font/google";
import "./globals.css";

const literata = Literata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kopi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${literata.className} font-bold`}>{children}</body>
    </html>
  );
}
