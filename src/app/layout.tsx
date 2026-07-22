import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AH Engineers | Precision Industrial Manufacturing & Engineering Components",
  description: "Manufacturing premium industrial components, foundation bolts, anchor bolts, shafts, pulleys, and custom forging with precision, quality, and reliability for over 20 years.",
  keywords: "AH Engineers, Industrial Engineering, Precision Manufacturing, Custom Forging, Foundation Bolts, High Tensile Bolts, Shafts, Flexible Couplings, Pulleys",
  authors: [{ name: "AH Engineers" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
