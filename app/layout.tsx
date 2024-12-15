import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/context";
import { MinSizeOverlay, ViewPortIndicator } from "@/components/index";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "light",
  // Restrict Page Zoom In/Out in mobile
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  applicationName: "Roy Joseph Argumido's Portfolio",
  authors: [
    { name: "Roy Joseph Argumido", url: "mailto:royjosephargumido@gmail.com" },
  ],
  title: {
    default:
      "Roy Joseph Argumido | Product Engineer & Junior Project Manager from Cebu, Philippines",
    template: "Roy Joseph Argumido | %s",
  },
  description:
    "Full-stack software engineer and project manager in Cebu City, Philippines, specializing in multi-disciplinary development and team leadership.",
  verification: {
    google: "google_verification_key_via_google_search_console", // https://support.google.com/webmasters/answer/9008080?hl=en#meta_tag_verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider>
        <body>
          <MinSizeOverlay />
          {children}
          <ViewPortIndicator />
        </body>
      </ThemeProvider>
    </html>
  );
}
