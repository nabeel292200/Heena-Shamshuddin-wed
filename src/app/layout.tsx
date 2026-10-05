import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F8F4EF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Heena & Shamshuddin • Wedding Invitation",
  description: "You are cordially invited to the sacred Nikah and wedding celebration of Heena Parween & Shamshuddin KS(Fayaz) on Thursday, 29 October 2026 at Koratagere.",
  keywords: "Heena Shamshuddin wedding, Islamic wedding invitation, digital Nikah invitation, luxury wedding app, Farooqiya Masjid Koratagere",
  openGraph: {
    title: "Heena & Shamshuddin • Wedding Invitation",
    description: "Witness the sacred union of Heena Parween & Shamshuddin KS(Fayaz) on Thursday, 29 October 2026.",
    url: "https://heena-and-shamshuddin-wedding.invitation/2026",
    siteName: "Heena & Shamshuddin Wedding Celebration",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Heena & Shamshuddin Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: Readonly<React.ReactNode>;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <body
        className="font-poppins bg-[#11100F] text-[#1A1A1A] antialiased selection:bg-[#C4A484] selection:text-white min-h-screen flex flex-col items-center justify-start"
      >
        {children}
      </body>
    </html>
  );
}
