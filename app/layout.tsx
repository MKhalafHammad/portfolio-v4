import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mohammad K. Hammad',
  description: 'Mohammad Khalafhammad is a software engineer and entrepreneur',
  icons: {
    icon: '/appicon.png',
    shortcut: '/appicon.png',
    apple: '/appicon.png',
    // Other icon sizes if needed
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/appicon.png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
