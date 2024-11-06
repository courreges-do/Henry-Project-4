import type { Metadata } from "next";
import { Nunito, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const primaryFont = Nunito({
  subsets: ["latin"],
  variable: "--primary-font",
  weight: ["400", "700"],
});

const secondaryFont = Roboto({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        <div className="container">
          <Navbar />
          <main className="bleed">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
