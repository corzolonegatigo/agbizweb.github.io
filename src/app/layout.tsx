import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest, Lexend_Deca, Raleway, Ubuntu, Slabo_27px } from "next/font/google";


import "./globals.css";
import Header from "./sections/header";

const slabo27 = Slabo_27px({

  variable: "--font-slabo-27",
  subsets: ["latin"],
  weight: "400",
  display: "swap",

});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-Ubuntu",
  subsets: ['latin'],
  weight: "400"
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})
const onest = Onest({
  subsets: ['cyrillic'],
  variable: "--font-onest",
  weight: "700",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: "300"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angels Business Consulting",
  description: "Work with us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexendDeca.variable} ${onest.variable} ${slabo27} ${raleway.variable} ${ubuntu.variable} antialiased`}
      >
        <Header />
        <div className="select-none">{children}</div>
        
      </body>
    </html>
  );
}
