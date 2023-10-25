import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { TailwindIndicator } from "@/components/tailwind-indicator"
export const metadata: Metadata = {
    title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) { 

  return  <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
       
            <div className="relative flex min-h-screen flex-col">
              <div >SiteHeader</div>
              <div className="flex-1">{children}</div>
              <div >SiteFooter</div>
            </div>
            <TailwindIndicator />
          {/* <NewYorkToaster />
          <DefaultToaster /> */}
        </body>
      </html>
    </>
}