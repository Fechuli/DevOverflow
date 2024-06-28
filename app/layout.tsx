import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignedOut,
} from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: "DevFlow",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}