import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synth Insights - AI-Powered Market Research Platform",
  description: "Synthetic market research platform: Test, validate and refine your business decisions before real-world impact.",
  alternates: {
    canonical: 'https://synth.com.es/en',
    languages: {
      'es-ES': 'https://synth.com.es/',
      'en-US': 'https://synth.com.es/en'
    }
  }
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}