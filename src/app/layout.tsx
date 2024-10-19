import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

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
