import { Toaster } from "@/components/ui/toaster";
import { ActaDisplay, BentonSans } from "./fonts";
import "./globals.css";
import Footer from "./ui/footer";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Shoaib Shahid - International Real Estate Management Consultant",
  description:
    "Shoaib Shahid is an international real estate management consultant with 15+ years of experience. Specializing in off-plan properties, luxury real estate, and prestigious locations worldwide.",

  keywords: [
    "Shoaib Shahid",
    "real estate consultant",
    "Dubai real estate",
    "luxury properties",
    "off-plan investments",
    "international property sales",
    "real estate management",
    "property advisor UAE",
    "global real estate consultant",
    "invest in Dubai"
  ],

  alternates: {
    canonical: "https://www.theshoaibshahid.com",
  },

  openGraph: {
    title: "Shoaib Shahid - International Real Estate Management Consultant",
    description:
      "With over $1.5 billion in property sales, Shoaib Shahid brings unparalleled expertise in luxury and off-plan real estate across global markets.",
    url: "https://www.theshoaibshahid.com",
    type: "website",
    images: [
      {
        url: "https://www.theshoaibshahid.com/assets/service.jpeg",
        width: 1200,
        height: 630,
        alt: "Shoaib Shahid Real Estate Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shoaib Shahid - Global Real Estate Consultant",
    description:
      "Over $1.5B in luxury real estate sales. Trusted advisor in off-plan investments and international property management.",
    images: ["https://www.theshoaibshahid.com/assets/service.jpeg"],
    creator: "@shoaibshahid", // Optional if you have a Twitter account
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${BentonSans.variable} ${ActaDisplay.variable}`}
    >
      <body className="font-acta">
        <NextTopLoader
        showSpinner={false}
        color="#112548"
        />
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-7HJZJBFYBZ" />
      </body>
    </html>
  );
}
