import { Inter, Noto_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased selection:bg-[#0b4619]/10 selection:text-[#0b4619]",
        inter.variable,
        notoSerif.variable
      )}
    >
      <body className="font-sans">
        <Providers>
          <ThemeProvider>
            {children}
            <WhatsAppButton />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

