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
  title: "Alex Labuda | Senior Data Scientist & ML Engineer",
  description: "Senior Data Scientist specializing in machine learning, predictive modeling, MLOps, and advanced analytics with expertise in Python, R, and Google Cloud Platform.",
  keywords: "Data Scientist, Machine Learning Engineer, MLOps, Python, R, Tableau, Google Cloud Platform, Vertex AI, Predictive Modeling, Time Series Forecasting",
  authors: [{ name: "Alex Labuda" }],
  openGraph: {
    title: "Alex Labuda | Senior Data Scientist & ML Engineer",
    description: "Senior Data Scientist with expertise in end-to-end machine learning solutions, MLOps, and data visualization.",
    url: "https://www.alex-labuda.com",
    siteName: "Alex Labuda Portfolio",
    images: [
      {
        url: "https://www.alex-labuda.com/images/headshot-portfolio.jpeg",
        width: 1200,
        height: 630,
        alt: "Alex Labuda - Senior Data Scientist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Labuda | Senior Data Scientist & ML Engineer",
    description: "Senior Data Scientist with expertise in end-to-end machine learning solutions, MLOps, and data visualization.",
    images: ["https://www.alex-labuda.com/images/headshot-portfolio.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.alex-labuda.com",
  },
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
              "image": "https://www.alex-labuda.com/images/headshot-portfolio.jpeg",
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
              ],
              "knowsLanguage": ["English"],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University"
              },
              "skills": [
                "Machine Learning",
                "Deep Learning",
                "Time Series Forecasting",
                "Media Mix Modeling",
                "Python Development",
                "R Programming",
                "SQL",
                "Data Visualization",
                "MLOps",
                "Cloud Architecture",
                "Google Cloud Platform",
                "Data Science Leadership"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Current Employer"
              }
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
