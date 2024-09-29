import '../global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{marginTop:"5rem"}}>
        {children}
      </body>
    </html>
  );
}
