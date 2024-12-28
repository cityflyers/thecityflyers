import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/providers/theme-provider"
import Header from "@/components/header/Header"
import "./globals.css"

export const metadata = {
  title: "Travel",
  description: "Book your next journey with us",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <div className="relative min-h-screen bg-background">
            <Header />
            <main className="pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
