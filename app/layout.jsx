import { ActaDisplay, BentonSans } from "./fonts";
import "./globals.css";
import Footer from "./ui/footer";
export const metadata = {
  title: "Shoaib Shahid - Global Real Estate Consultant",
  description:
    "Shoaib Shahid is a seasoned global real estate consultant with over 15 years of experience. He has overseen property sales worth $1.5 billion, specializing in off-plan properties, luxury real estate, and prestigious locations.",
  // Social Media Meta Tags
  ogTitle: "Shoaib Shahid - Global Real Estate Consultant",
  ogDescription:
    "Shoaib Shahid is a seasoned global real estate consultant with over 15 years of experience. He has overseen property sales worth $1.5 billion, specializing in off-plan properties, luxury real estate, and prestigious locations.",
  ogType: "website",
  ogUrl: "https://www.theshoaibshahid.com/", // Replace with actual URL
  ogImage:
    "https://shoaib-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.d3bd4028.jpg&w=1920&q=75", // Replace with actual image URL
  twitterTitle: "Shoaib Shahid - Global Real Estate Consultant",
  twitterDescription:
    "Shoaib Shahid is a seasoned global real estate consultant with over 15 years of experience. He has overseen property sales worth $1.5 billion, specializing in off-plan properties, luxury real estate, and prestigious locations.",
  twitterCard: "summary_large_image",
  twitterImage:
    "https://shoaib-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.d3bd4028.jpg&w=1920&q=75", // Replace with actual image URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${BentonSans.variable} ${ActaDisplay.variable}`}>
      <body className="font-acta">
        {children}
        <Footer />
      </body>
    </html>
  );
}
