import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'Jayden – Product Designer',
  description: 'UX/Product designer with 15 years of experience building products grounded in collaboration.',
  keywords: ['UX Design', 'Product Design', 'Design System', 'Team Lead'],
  authors: [{ name: 'Jayden Hanly' }],
  openGraph: {
    title: 'Jayden – Product Designer',
    description: 'UX/Product designer with 15 years of experience.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-800 antialiased">
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {children}
      </body>
    </html>
  );
}
