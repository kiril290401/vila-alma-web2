import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Къща за гости „Алма“ Сопот | Нощувки и Уют в Подбалкана",
    description: "Заповядайте в Къща за гости „Алма“ – Сопот. Комфортни стаи, тишина и прекрасна градина под Балкана. Идеалното място за почивка и туризъм в Сопот. Резервирайте сега!",
    keywords: ["къща за гости Сопот", "нощувки Сопот", "настаняване Сопот", "почивка в Сопот", "хотели Сопот"],
    openGraph: {
      title: "Къща за гости „Алма“ – Твоят дом в Сопот",
      description: "Уютни стаи и автентична атмосфера в центъра на туризма и парапланеризма.",
      images: [
        {
          url: "/header.webp", 
          width: 630,
          height: 1200,
          alt: "Къща за гости Алма Сопот",
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    metadataBase: new URL("https://guest-house-alma.com/"),
    verification: {
    google: 'tu-codigo-de-verificacion-google-search-console',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd/>
        <Navbar/>
        {children}</body>
    </html>
  );
}
