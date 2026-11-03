import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Witchly Marketplace",
  description: "فروشگاه محصولات و خدمات",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
