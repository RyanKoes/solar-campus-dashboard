import type { Metadata } from "next";
import { Iceland, Quicksand } from "next/font/google";
import "./globals.css";

const iceland = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar Campus Dashboard",
  description: "Monitor and analyze solar energy production across campus facilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${iceland.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
