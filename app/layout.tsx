import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Providers } from '@/components/providers/Providers';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TechFlow Solutions - Reliable Software That Scales',
    template: '%s | TechFlow Solutions'
  },
  description: 'Full-stack engineering, cloud & DevOps, AI systems, and managed IT — delivered with measurable outcomes. From prototype to production.',
  keywords: [
    'IT services',
    'software development',
    'cloud services',
    'DevOps',
    'AI systems',
    'managed IT',
    'web development',
    'mobile apps',
    'cybersecurity',
    'enterprise software'
  ],
  authors: [{ name: 'TechFlow Solutions' }],
  creator: 'TechFlow Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techflowsolutions.com',
    title: 'TechFlow Solutions - Reliable Software That Scales',
    description: 'Full-stack engineering, cloud & DevOps, AI systems, and managed IT — delivered with measurable outcomes.',
    siteName: 'TechFlow Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechFlow Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow Solutions - Reliable Software That Scales',
    description: 'Full-stack engineering, cloud & DevOps, AI systems, and managed IT — delivered with measurable outcomes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}