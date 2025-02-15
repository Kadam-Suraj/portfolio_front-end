import type { Metadata } from 'next';
import { Inter as FontSans, Poppins } from "next/font/google"
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Outlet from './Outlet';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ['latin'],  // Choose subsets
  weight: ['300', '400', '600'], // Choose font weights
  variable: '--font-poppins' // CSS variable for Tailwind
});

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created by Me with Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable, poppins.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Outlet>
            {children}
          </Outlet>
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}