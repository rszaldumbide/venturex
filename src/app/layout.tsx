import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"],display: 'swap',variable: '--font-Inter' });

export const metadata = {
  title: "Venturex",
  description: "Comercio Internacional",
  //icon
  icon: "/Logo VentureX.svg",
  //og
  og: {
    title: "Venturex",
    description: "Comercio Internacional",
    image: "/Logo VentureX.svg",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
