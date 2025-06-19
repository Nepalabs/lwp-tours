import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhutan Travel & Tours with Local Experts | Explore Bhutan Authentically",
  description: "Discover authentic Bhutan travel experiences with local experts. Custom tours, cultural immersion, trekking adventures, and luxury travel packages.",
  keywords: "Bhutan travel, Bhutan tours, Bhutan tourism, cultural tours, trekking, luxury travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
