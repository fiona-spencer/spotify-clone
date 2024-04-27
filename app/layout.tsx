import type { Metadata } from "next";
import { Figtree  } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to Music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
