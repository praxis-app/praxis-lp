import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praxis LP",
  description: "Praxis LP is the landing page for the Praxis project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
