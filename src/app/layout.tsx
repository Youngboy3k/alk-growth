import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ALK Growth - Custom Websites That Help Businesses Grow",
  description: "Professional website design and development services. Modern design, clean code, and built exactly how you want them.",
  icons: {
    icon: [
      { url: '/favicon-20250930184229.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-20250930184229.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon-20250930184229.ico?v=3" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon-20250930184229.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ALK Growth",
              "url": "https://alkgrowth.com",
              "logo": "https://alkgrowth.com/black-logo.png",
              "description": "AI-powered web design and SEO agency helping businesses rank on Google and be recognized by AI systems. Based in Cyprus, serving clients globally.",
              "founder": {
                "@type": "Person",
                "name": "Alex Kyriacou",
                "jobTitle": "Founder & AI Web Designer",
                "sameAs": [
                  "https://www.linkedin.com/in/alex-alkgrowth/"
                ]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CY"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "alkgrowth@gmail.com",
                "contactType": "business inquiries",
                "availableLanguage": "English"
              },
              "areaServed": "Worldwide",
              "keywords": [
                "web design",
                "SEO",
                "AI automation",
                "Cyprus",
                "AI web agency"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${lora.variable} ${ibmPlexMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
