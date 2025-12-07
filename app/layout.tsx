import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiesha Walker - Software Engineer Portfolio",
  description: "Full-Stack Software Engineer portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
              <Link href="/" className="text-sm font-semibold tracking-[0.4em] uppercase">
                KW
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
                <Link href="/#experience" className="hover:text-foreground transition">
                  Experience
                </Link>
                <Link href="/#projects" className="hover:text-foreground transition">
                  Projects
                </Link>
                <Link href="/#contact" className="hover:text-foreground transition">
                  Contact
                </Link>
                <Link href="/projects" className="hover:text-foreground transition">
                  Case Studies
                </Link>
              </nav>
              <a
                href="mailto:llcwalkerk@gmail.com"
                className="rounded-full border border-accent/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition hover:bg-accent hover:text-background"
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:px-10 lg:px-16">
            {children}
          </main>
          <footer className="border-t border-white/10 bg-background/70 py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <span>&copy; {new Date().getFullYear()} Kiesha Walker. Built with intention.</span>
              <div className="flex flex-wrap items-center gap-4">
                <a href="mailto:llcwalkerk@gmail.com" className="hover:text-foreground transition">
                  llcwalkerk@gmail.com
                </a>
                <a href="tel:+14699342489" className="hover:text-foreground transition">
                  (469) 934-2489
                </a>
                <Link href="/#projects" className="hover:text-foreground transition">
                  Explore Projects
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
