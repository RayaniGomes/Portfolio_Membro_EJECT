import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: "Protfolio dos Membros",
  description: "Site do Protfolio dos Membros da EJECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
