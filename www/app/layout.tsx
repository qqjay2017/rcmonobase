import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from './lib/utils'
import { ThemeProvider } from './components/theme-provider'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

const fontHeading = localFont({
  src: './assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'hooks doc',
  description: 'hooks doc',
  keywords: ['react', 'hooks', 'react-hooks', 'usehooks', 'typescript'],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        suppressHydrationWarning
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontHeading.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
