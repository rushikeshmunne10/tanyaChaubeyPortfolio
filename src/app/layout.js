import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Life Coach - Tanya Chaubey",
  description: "This is a Digital Portfolio of Tanya Chaubey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Life Coach - Tanya Chaubey</title>
        <meta name="description" content="A Life Coach dedicated to helping women find balance, empowerment, and harmony in every facet of their lives—both personal and professional." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="tanya chaubey, anxiety, self-help, mental health, mental wellness, stress management, life coaching" />

        <meta property="og:title" content="Life Coach - Tanya Chaubey" />
        <meta property="og:description" content="A Life Coach dedicated to helping women find balance, empowerment, and harmony in every facet of their lives—both personal and professional." />
        <meta property="og:image" content="/images/tanya-new.jpg" />
        <meta property="og:url" content= {process.env.NEXT_PUBLIC_WEBSITE_URL}/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Life Coach Tanyaa" />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": process.env.NEXT_PUBLIC_WEBSITE_URL || "https://lifecoachtanyaa.vercel.app",
              "name": "Life Coach Tanyaa",
              "description": "A Life Coach dedicated to helping women find balance, empowerment, and harmony in every facet of their lives—both personal and professional.",
              "publisher": {
                "@type": "Organization",
                "name": "Life Coach Tanyaa"
              },
              "logo": "https://lifecoachtanyaa.vercel.app/logo.png",
            })
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
