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
    <body className="bg-gray-50">{children}</body>
  </html>
);

export default Layout;
