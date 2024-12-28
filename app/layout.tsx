import "./globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LayoutClientWrapper } from "./layout-client-wrapper"

export const metadata: Metadata = {
  title: "Travel",
  description: "Book your next journey with us",
}

// No "use client" here → server component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutClientWrapper>
            {/* The child pages and/or the main content go here */}
            {children}
          </LayoutClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
