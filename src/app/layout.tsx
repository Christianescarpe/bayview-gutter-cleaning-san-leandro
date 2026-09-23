import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://bayviewguttercleaningsanleandro.com'),
  title: {
    default: 'Bayview Gutter Cleaning San Leandro | Local East Bay Gutter Care',
    template: '%s | Bayview Gutter Cleaning San Leandro',
  },
  description: 'Trusted gutter cleaning San Leandro CA homeowners rely on. Free quotes, insured local crews, and same-week scheduling. Call +1 (510) 756-3191.',
  keywords: [
    'gutter cleaning San Leandro',
    'gutter cleaning San Leandro CA',
    'gutter cleaners San Leandro',
    'downspout cleaning San Leandro',
    'gutter repair San Leandro',
    'gutter guards San Leandro',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'zxHMMCHi0pZ6Aw3Mntdj5uddFjuf-DFSS1iA-RI28zw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900 pb-16 lg:pb-0">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
