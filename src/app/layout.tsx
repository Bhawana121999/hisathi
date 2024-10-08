import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from "react-hot-toast";


const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: '--playfair_display',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
  variable: '--lato',
});

export const metadata: Metadata = {
  title: "Hisathi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair_display.variable} ${lato.variable}`}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}
      </body>
    </html>
  );
}
