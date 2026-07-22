import "./global.css";

import { ReactNode } from "react";

export const metadata = {
  title: `SugarPress Website Redesign \(Copy\)`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
