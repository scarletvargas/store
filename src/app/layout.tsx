import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "./globals.css";

const onest = Onest({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Space ✨",
  description: "Welcome to the app store, an ecommerce like no other",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background m-auto w-screen h-screen min-w-xs md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl ${onest.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
