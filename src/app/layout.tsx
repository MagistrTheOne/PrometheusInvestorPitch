import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Прометей AGI — отечественная платформа ИОИ",
  description: "Три модели — одна платформа. Произведено в РФ. Готово к развёртыванию.",
  metadataBase: new URL("https://prometheus.example.ru"),
  openGraph: {
    title: "Прометей AGI",
    description: "Отечественная платформа ИОИ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
