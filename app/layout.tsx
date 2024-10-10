// app/layout.tsx

import { FC, ReactNode } from "react";
import "./styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <head>
      <title>CCNA Quiz App</title>
    </head>
    <body className="bg-violet-50 flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-violet-700 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">CCNA Exam Practice Quiz</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 flex justify-center items-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-violet-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>built with 💓 by Nattie Nkosi</p>
        </div>
      </footer>
    </body>
  </html>
);

export default Layout;
