import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google'; // Using Inter as a common sans-serif example
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import Footer from "@/components/layout/footer"

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Firewall Dashboard',
  description: 'Firewall Dashboard for managing and monitoring network traffic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
