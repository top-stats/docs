import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <head>
      <script defer data-domain="docs.topstats.gg" src="https://analytics.dbot.dev/js/script.js"></script>
    </head>
    <body className="flex flex-col min-h-screen">
    <RootProvider>{children}
      <div className="background-gradient" />
        </RootProvider>
      </body>
    </html>
  );
}
