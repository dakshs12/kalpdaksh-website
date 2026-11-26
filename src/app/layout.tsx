import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalpdaksh Commotrade Pvt Ltd · Cotton Brokerage, Indore",
  description:
    "Kalpdaksh Commotrade Pvt Ltd is a cotton brokerage and commission house in Indore, Madhya Pradesh, sourcing cotton for India's leading mills and serving trade partners overseas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#3a4356]">
        {children}
        <Script
          id="google-tag-src"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PWXTLZCV"
          strategy="beforeInteractive"
        />
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </body>
    </html>
  );
}
