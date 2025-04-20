import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Extra University",
  description:
    "Добро пожаловать в Extra University — место, где инновации встречаются с традициями, а знания становятся будущим.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="qdsjqm9">
      <body className="antialiased" data-oid="806hq5j">
        <Navbar data-oid="zofy60:" />
        {children}
        <Footer data-oid="w2t4mzp" />
      </body>
    </html>
  );
}
