import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next-Gen AI Automation',
  description: 'Deploy custom enterprise agents and automate complex workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-x-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}