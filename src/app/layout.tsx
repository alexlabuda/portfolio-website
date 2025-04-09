import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['400', '700', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Labuda | Senior Data Scientist",
  description: "Senior Data Scientist specializing in machine learning, predictive modeling, and advanced analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alex Labuda",
              "jobTitle": "Senior Data Scientist",
              "url": "https://www.alex-labuda.com",
              "sameAs": [
                "https://github.com/alexlabuda",
                "https://www.linkedin.com/in/alex-labuda"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Python",
                "R",
                "Data Visualization",
                "Predictive Modeling",
                "MLOps",
                "Tableau",
                "Google Cloud Platform",
                "Vertex AI"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
