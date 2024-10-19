import type { Metadata } from "next";
import { Handjet } from "next/font/google";
import { Lexend } from "next/font/google";
import "./globals.css";

const HandjetFont = Handjet({
  subsets: ["latin"],
  weight: "400",
});

const LexendFont = Lexend({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "10Manip",
  description: "Bagi anak CS saja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LexendFont.className} antialiased`}>{children}</body>
    </html>
  );
}
