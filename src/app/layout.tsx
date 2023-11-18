import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "EZY Taxis: Fast, Affordable Taxis - Top Cab Service in Gatwick, Crawley, Horsham and Surrounding Areas",
  description:
    "Discover EZY Taxis – Your go-to taxi service in Gatwick, Crawley, Horsham, and surrounding areas. Experience fast, reliable, and affordable rides with our user-friendly booking app. Whether it's airport transfers, local journeys, or daily commutes, we ensure a comfortable and safe travel experience. Book your ride with ease and explore the best of local transportation.",
  keywords: [
    "EZY Taxis",
    "Taxi Service Gatwick",
    "Crawley Taxi Booking",
    "Horsham Cab Service",
    "Airport Transfers Gatwick",
    "Local Taxi Service Crawley",
    " Reliable Taxis Horsham",
    "Affordable Cabs Gatwick Area",
    "Taxi Near Me",
    "Best Taxi Service Crawley",
    "Horsham to Gatwick Taxi",
    "Crawley to Horsham Cab",
    "Quick Taxi Booking",
    " 24/7 Taxi Service",
    "Safe Taxi Gatwick",
    "Professional Taxi Drivers Crawley",
    "Gatwick Airport Taxi",
    "Executive Taxis Horsham",
    "Taxi App Crawley",
    "Door-to-Door Taxi Service",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B4WQVMJCC2"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B4WQVMJCC2');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
