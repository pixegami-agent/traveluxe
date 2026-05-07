import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Traveluxe | Luxury Travel Experiences',
  description: 'Curated luxury travel experiences for the discerning traveler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Sora:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-midnight-900 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
