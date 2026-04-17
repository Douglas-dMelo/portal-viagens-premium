import type { Metadata } from "next";
import { Layout } from "@/components/Layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Atlas Prive | Portal de Viagens",
    template: "%s | Atlas Prive",
  },
  description:
    "Portal de viagens com destinos exclusivos, roteiros inspiradores e conteudo editorial premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
