import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata = {
  title: "PKS Infratech — Building Infrastructure. Creating Enduring Value.",
  description:
    "Pradeep Kumar Singh Infratech Private Limited (PKS Infratech) is an infrastructure development and advisory firm delivering sustainable growth through expert guidance, strategic partnerships, and disciplined execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
