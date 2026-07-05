import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Inter is kept only as a graceful fallback while Switzer loads.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Switzer (Fontshare) is self-hosted — it is not available on Google Fonts.
// Primary body + heading typeface for the whole site.
const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Switzer-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Switzer-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-switzer",
});

export const metadata = {
  title: {
    default:
      "PKS Infratech — Building Infrastructure. Creating Enduring Value.",
    template: "%s — PKS Infratech",
  },
  description:
    "Pradeep Kumar Singh Infratech Private Limited (PKS Infratech) is an ISO 9001:2012 certified infrastructure development and advisory firm delivering sustainable growth through expert guidance, strategic partnerships, and disciplined execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${switzer.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col pb-24 lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
