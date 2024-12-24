// app/layout.tsx
import { FC, ReactNode } from "react";
import "./styles/globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import { ThemeToggle } from "./quiz/components/theme-toggle";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <title>CCNA Quiz App</title>
    </head>
    <body className="bg-violet-50 dark:bg-gray-900 transition-colors flex flex-col min-h-screen">
      <ThemeProvider>
        {/* Header */}
        <header className="bg-violet-700 dark:bg-violet-900 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">CCNA Exam Practice Quiz</h1>
            <nav className="flex gap-4">
              <Link
                href="/resources"
                className="text-white hover:text-violet-200 transition-colors"
              >
                Study Resources
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-6 flex justify-center items-center">
          <div className="w-full max-w-4xl dark:text-white">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-violet-700 dark:bg-violet-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>built with 💓 by Nattie Nkosi</p>
          </div>
        </footer>
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
