import './globals.css'
import React from "react";

export const metadata = {
  title: 'Intent Demo',
  description: 'Intent-centric Web3 demo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}