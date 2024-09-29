"use client";

import './globals.css'; 
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>gst test</title>
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body>{children}</body>
    </html>
  );
}
