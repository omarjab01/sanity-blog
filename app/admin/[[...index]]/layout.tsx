import React from 'react'

export const metadata = {
    title: 'Sanity Studio',
    description: 'Generated by create next app',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    )
  }

// export default layout