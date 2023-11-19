import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.scss";
import TopNavigation from "./components/TopNavigation";
import TheFooter from "./components/TheFooter";
import Image from "next/image";
import Script from "next/script";

const dmSans = DM_Sans({
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

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
      <body className={dmSans.className}>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-59SHWYK4HD"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-59SHWYK4HD');
          `}
        </Script>

        <div className="flex flex-col justify-between h-screen">
          <TopNavigation />
          <div className="p-10 md:p-16 text-slate-700">{children}</div>
          <div className="px-10 fixed bottom-0 right-0">
            <a
              className="mr-2"
              href="https://wa.me/447749439999?text=Hi%2C%20I%20want%20to%20place%20a%20booking%20for%20a%20taxi."
              target="_blank"
            >
              <Image
                src="/whatsapp.svg"
                alt="whatsapp logo"
                width={70}
                height={30}
              />
            </a>
          </div>

          <TheFooter />
        </div>
      </body>
    </html>
  );
}
