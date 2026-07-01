import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollSmootherProvider } from "@/components/providers/ScrollSmootherProvider";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhawallamba.dev"),
  title: "Dhawal Lamba — AI Engineer & Full Stack Developer",
  description: "B.Tech CS student specializing in AI/ML. Building systems that think, scale, and ship. Explore projects in AI, security, edtech, and full-stack development.",

  keywords: ["AI engineer", "full stack developer", "machine learning", "portfolio", "Dhawal Lamba"],
  authors: [{ name: "Dhawal Lamba" }],
  openGraph: {
    type: "website",
    url: "https://dhawallamba.dev",
    title: "Dhawal Lamba — AI Engineer & Full Stack Developer",
    description: "B.Tech CS student specializing in AI/ML. Building systems that think, scale, and ship. Explore projects in AI, security, edtech, and full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhawal Lamba — AI Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhawal Lamba — AI Engineer & Full Stack Developer",
    description: "B.Tech CS student specializing in AI/ML. Building systems that think, scale, and ship. Explore projects in AI, security, edtech, and full-stack development.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollSmootherProvider>
            {children}
          </ScrollSmootherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
