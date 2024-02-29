import "y/styles/globals.css";

import type { Metadata } from "next";
import { Providers } from "y/components/providers";
import { MainFooter } from "y/components/ui/main-footer";
import { MainHeader } from "y/components/ui/main-header";
import { siteConfig } from "y/config/site";
import { fontMono, fontSans } from "y/lib/fonts";
import { cn } from "y/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],

  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontMono.variable)}>
        <Providers defaultTheme="dark" attribute="class">
          <section className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background">
              <div className="container flex h-16 items-center justify-between py-4">
                <MainHeader />
              </div>
            </header>
            <main className="grid grid-cols-1">
              <section className="lg:mx-3 lg:my-8">{children}</section>
            </main>
          </section>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
